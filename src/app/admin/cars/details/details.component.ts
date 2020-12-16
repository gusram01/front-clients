import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  car: any;
  carDetails: FormGroup;

  constructor(
    private carsService: CarsService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.gralInfo();
  }

  createForm(): void {
    this.carDetails = this.fb.group({});
  }

  ngOnInit(): void {}

  gralInfo(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.carsService.findById(id)))
      .subscribe((data) => {
        console.log(data);
        this.car = data;
      });
  }

  details(): any {
    const details = {
      motor: {
        cc: 123,
        type: 'gasoline',
        hp: 123,
      },
      secure: {
        airbags: 2,
        abs: true,
      },
      comfort: {
        ac: true,
      },
    };
    return details;
  }
}
