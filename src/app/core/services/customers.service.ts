import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../models/customers';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ListCustomersResponse, ListCustomers } from '../models/index';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  create(client: Customers): Observable<any> {
    return this.http.post(`${this.url}/customers`, client);
  }

  list(): Observable<ListCustomers[]> {
    return this.http.get<ListCustomersResponse>(`${this.url}/customers`).pipe(
      map(
        (data) => {
          return data.data;
        },
        catchError((err) => {
          return of([]);
        })
      )
    );
  }
}
