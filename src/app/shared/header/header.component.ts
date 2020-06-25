import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../services/services.index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private login: LogginService, private router: Router) {

  }
    ngOnInit() {
    }

    logOut(){
      this.login.logOut();
      this.router.navigateByUrl('/login');
    }

  }
