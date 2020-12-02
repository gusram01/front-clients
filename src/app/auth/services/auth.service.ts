import jwt from 'jwt-decode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Users } from '../../core/models/users';
import { Token } from '../../core/models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  login(data: Partial<Users>): Observable<Partial<Users>> {
    return this.http.post<Partial<Users>>(`${environment.url}/login`, data);
  }
  signup(data: Users): Observable<Partial<Users>> {
    return this.http.post<Partial<Users>>(`${environment.url}/signup`, data);
  }

  getToken(): boolean {
    const myClientToken = JSON.parse(localStorage.getItem('myClient$T0k3n'));
    if (!myClientToken) {
      return false;
    }
    const { exp } = jwt<Token>(myClientToken.token);
    return exp >= new Date().getTime() / 1000;
  }
}
