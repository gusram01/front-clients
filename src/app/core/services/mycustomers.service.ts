import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Customers } from '../models/customers';
import { ListCustomers, ListCustomersResponse } from '../models/index';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyCustomersService {
  private url = environment.url;
  private _customers: Partial<ListCustomers>[];

  private _customers$: BehaviorSubject<Partial<ListCustomers>[]>;
  public get customers$(): Observable<Partial<ListCustomers>[]> {
    return this._customers$.asObservable();
  }

  constructor(private http: HttpClient) {
    this.list().subscribe((data) => {
      this._customers = data;
      this._customers$.next(this._customers);
    });
    this._customers$ = new BehaviorSubject([]);
  }

  initialList() {
    this.list().subscribe((data) => {
      this._customers = data;
    });
  }

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
