import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { checkNull } from '../configs/constants';
import { getToken } from '../helpers/token.helpers';

@Injectable({
  providedIn: 'root',
})
export class NonProtectedGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!checkNull(getToken())) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
