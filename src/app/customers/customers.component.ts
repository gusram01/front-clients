import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomersService } from '../core/services/customers.service';
import { ListCustomers } from '../core/models/index';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Observable<Partial<ListCustomers>[]>;
  actions = ['details', 'sale', 'edit'];

  constructor(private clientsApi: CustomersService) {
    this.getClients();
  }

  ngOnInit(): void {}

  getClients(): void {
    this.customers = this.clientsApi.list().pipe(
      map((data) =>
        data.map((item) => {
          const { userid, clientid, email, ...returningData } = item;
          return returningData;
        })
      )
    );
  }

  listenIdEvent(id: string | number): void {
    console.log(id);
  }
}
