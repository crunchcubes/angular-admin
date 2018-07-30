//https://scotch.io/tutorials/protecting-angular-v2-routes-with-canactivatecanactivatechild-guards

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../core';
import { map } from 'rxjs/operators/map';
import { take } from 'rxjs/operators/take';

@Injectable()
export class NoAuthGuard implements CanActivate {
  isLoggedIn:boolean = true;
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    //console.log(this.userService.isAuthenticated);
    return this.userService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth));

  }*/
  /*canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    return this.userService.isLoggedIn().map(e => {
        if (e) {
            return true;
        }
    }).catch(() => {
        this.router.navigate(['/login']);
        return Observable.of(false);
    });
}   */
/*
[::KEEP::]
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
}*/

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
