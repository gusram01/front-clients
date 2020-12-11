import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarsService } from '../core/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars: Observable<any[]>;
  actions = ['details', 'sale', 'edit'];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.cars = this.carsService.list().pipe(
      map((data) =>
        data.map((item) => {
          const { description, ...returningData } = item;
          return returningData;
        })
      )
    );
  }

  listenIdEvent(id: string | number): void {
    console.log(id);
  }
}
