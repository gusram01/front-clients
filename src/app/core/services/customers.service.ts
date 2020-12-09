import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../models/customers';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  create(client: Customers): Observable<any> {
    return this.http.post(`${this.url}/customers`, client);
  }

  list(): Observable<any> {
    return this.http.get(`${this.url}/customers`);
  }
}
