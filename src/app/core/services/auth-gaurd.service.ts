import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
}                       from '@angular/router';
import { AuthService } from 'src/app/welcome/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {




  constructor(
    private authService: AuthService,
    private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
if (this.authService.isLogged()/* && this.authService.isPermited()*/) {
return true;
}

// Remark: And what if a server error occured? if we want to be sure that access is denied, we should
// check if user has permissions to access the view.
if (!this.authService.isLogged()) {
  if (this.router.url === '/') {
    this.router.navigate(['/welcome']);
    }

}

return false;
}
}
