import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Users } from '../../core/models/users';
import { ResponseApi } from '../../core/models/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  login(data: Partial<Users>): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${environment.url}/login`, data);
  }

  signup(data: Users): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${environment.url}/signup`, data);
  }

  isValid(item: { key: string; value: string }): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(
      `${environment.url}/validate/${item.key}/${item.value}`
    );
  }
}
