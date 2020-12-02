export interface Token {
  id: string;
  roles: number;
  email: string;
  exp: number;
  iat: number;
}

export interface ResponseToken {
  id: string;
  token: Token;
}
