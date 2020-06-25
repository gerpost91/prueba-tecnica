import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogginService } from '../services/services.index';



@Injectable({
  providedIn: 'root'
})
export class AutenticationGuard implements CanActivate {

  constructor(private login: LogginService, private route: Router) {

  }

  canActivate(): boolean {
    if (this.login.autenticado()) {
      return true;
    } else {
      this.route.navigateByUrl('/login');
    }
  }

}
