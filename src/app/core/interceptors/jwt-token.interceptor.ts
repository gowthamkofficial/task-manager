import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { checkNull } from '../configs/constants';
import { getToken } from '../helpers/token.helpers';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = getToken();

    if (checkNull(token)) {
      const newHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: String(token),
      });
      let clone = request.clone({ headers: newHeaders });
      return next.handle(clone);
    } else {
      return next.handle(request);
    }
  }
}
