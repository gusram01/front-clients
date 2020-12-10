import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsService } from '../core/services/cars.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars: Observable<any[]>;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.cars = this.carsService.list().pipe(
      map((data) =>
        data.map((item) => {
          const { _id, ...returningData } = item;
          return returningData;
        })
      )
    );
  }
}
