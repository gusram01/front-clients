import { UserCustomers } from './customers';
import { Customers } from './customers';

export interface UserCustomersResponse {
  ok: boolean;
  data: UserCustomers[];
}
export interface CustomersResponse {
  ok: boolean;
  data: Customers[];
}
