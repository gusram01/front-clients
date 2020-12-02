import { Users } from './users';
import { Customers } from './customers';
import { Cars } from './cars';
import { Categories } from './categories';
import { Brands } from './brands';
import { Models } from './models';
import { Versions } from './versions';
import { Roles } from './roles';
import { CarsCategories } from './cars_categories';
import { CarsCustomers } from './cars_customers';
import { UsersCustomers } from './users_customers';
import { Operations } from './operations';
import { ResponseToken } from './token_response';

export type MyResponse =
  | Users
  | Customers
  | Cars
  | Categories
  | Brands
  | Models
  | Versions
  | Roles
  | CarsCategories
  | CarsCustomers
  | UsersCustomers
  | Operations
  | ResponseToken;

export interface ResponseApi {
  ok: boolean;
  data: MyResponse | MyResponse[] | null | boolean | ResponseToken;
}
