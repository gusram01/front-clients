import jwt from 'jwt-decode';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '../models/token_response';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const myClientToken = JSON.parse(localStorage.getItem('myClient$T0k3n'));
    if (!myClientToken) {
      this.router.navigateByUrl('/home');
      return false;
    }
    const { exp } = jwt<Token>(myClientToken.token);
    const flag = exp >= new Date().getTime() / 1000;
    if (!flag) {
      this.router.navigateByUrl('/home');
    }
    return flag;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const myClientToken = JSON.parse(localStorage.getItem('myClient$T0k3n'));
    if (!myClientToken) {
      this.router.navigateByUrl('/home');
      return false;
    }
    const { exp } = jwt<Token>(myClientToken.token);
    const flag = exp >= new Date().getTime() / 1000;
    if (!flag) {
      this.router.navigateByUrl('/home');
    }
    return flag;
  }
}
