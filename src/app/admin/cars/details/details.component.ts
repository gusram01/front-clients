import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  car: any;

  constructor(
    private carsService: CarsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getDetail();
  }

  ngOnInit(): void {}

  getDetail(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.carsService.findById(id)))
      .subscribe((data) => {
        console.log(data);
        this.car = data;
      });
  }
}
