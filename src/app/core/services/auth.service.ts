import jwt from 'jwt-decode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Users } from '../models/users';
import { ResponseApi } from '../models/index';
import { Token } from '../models/token_response';

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

  isValidToken(): boolean {
    const myClientToken = JSON.parse(localStorage.getItem('myClient$T0k3n'));
    if (!myClientToken) {
      return false;
    }
    const { exp } = jwt<Token>(myClientToken.token);
    return exp >= new Date().getTime() / 1000;
  }
}
