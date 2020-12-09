import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../core/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor(private clientsApi: CustomersService) {}

  ngOnInit(): void {
    this.getClients()
  }

  getClients(): void {
    this.clientsApi.list().subscribe((data) => {
      console.log(data);
    });
  }
}
