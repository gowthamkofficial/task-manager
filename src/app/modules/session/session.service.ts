import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: ApiService) {}

  signIn(data): Observable<any> {
    return this.http.post('/signin', data);
  }

  register(data): Observable<any> {
    return this.http.post('/register', data);
  }
}
