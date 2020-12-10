import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../core/services/customers.service';
import { Observable } from 'rxjs';
import { ListCustomers } from '../core/models/index';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Observable<ListCustomers[]>;

  constructor(private clientsApi: CustomersService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.customers = this.clientsApi.list();
  }
}
