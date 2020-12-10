import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../core/services/customers.service';
import { Observable } from 'rxjs';
import { ListCustomers } from '../core/models/index';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Observable<Partial<ListCustomers>[]>;

  constructor(private clientsApi: CustomersService) {
    this.getClients();
  }

  ngOnInit(): void {}

  getClients(): void {
    this.customers = this.clientsApi.list().pipe(
      map((data) =>
        data.map((item) => {
          const { _id, userid, clientid, email, ...returningData } = item;
          return returningData;
        })
      )
    );
  }
}
