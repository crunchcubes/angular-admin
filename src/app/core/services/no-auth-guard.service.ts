//https://scotch.io/tutorials/protecting-angular-v2-routes-with-canactivatecanactivatechild-guards

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

//import { UserService } from '../../core';
import { UserService } from './user.service';
import { map } from 'rxjs/operators/map';
import { take } from 'rxjs/operators/take';

@Injectable()
export class NoAuthGuard implements CanActivate {
  isLoggedIn:boolean = true;
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }


}