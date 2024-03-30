import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpParams,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.baseURL}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.baseURL}${path}`, body);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.baseURL}${path}`, body);
  }

  delete(path, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(`${environment.baseURL}${path}`, {
      params: params,
    });
  }

}
