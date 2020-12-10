import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListCarsResponse, ListCars } from '../models/index';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  list(): Observable<ListCars[]> {
    return this.http.get<ListCarsResponse>(`${this.url}/cars`).pipe(
      map((data) => data.data),
      catchError((err) => of([]))
    );
  }
}
