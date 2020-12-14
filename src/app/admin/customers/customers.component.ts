import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomersService } from './services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Observable<Partial<any>[]>;
  actions = ['details', 'sale', 'edit'];

  constructor(private customersService: CustomersService) {
    this.getClients();
  }

  ngOnInit(): void {}

  getClients(): void {
    this.customers = this.customersService.list().pipe(
      map((data) => {
        return data.map((item) => {
          const { userid, clientid, email, ...returningData } = item;
          return returningData;
        });
      })
    );
  }

  listenIdEvent(id: string | number): void {
    console.log(id);
  }
}
