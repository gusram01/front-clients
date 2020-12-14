export interface UserCustomers {
  clientid: string;
  curp: string;
  email: string;
  firstname: string;
  lastname: string;
  mobile: string;
  userid: string;
  username: string;
  _id: string;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface Customers {
  _id: string;
  curp: string;
  firstname: string;
  lastname: string;
  mobile: string;
  gender: string;
  phone?: string;
  email: string;
  updated_at?: Date;
  deleted_at?: Date;
  [key: string]: string | number | boolean | Date | undefined;
}
