import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import {
  Customers,
  UserCustomers,
  UserCustomersResponse,
  CustomersResponse,
} from '../interfaces/index';

type MyResponse = Customers | UserCustomers;

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  create(client: Customers): Observable<any> {
    return this.http.post(`${this.url}/customers`, client);
  }

  list(): Observable<MyResponse[]> {
    return this.http.get<UserCustomersResponse>(`${this.url}/customers`).pipe(
      map((data) => data.data),
      catchError((err) => of([]))
    );
  }
}
