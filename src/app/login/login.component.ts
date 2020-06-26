import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../models/usuario.login';
import { NgForm } from '@angular/forms';
import { LogginService } from '../services/services.index';
import { Router } from '@angular/router';
// decodifica token
import * as jwt_decode from 'jwt-decode';
// iniliciador de plugins
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioLogin;
  recordame: true;
  errorMessage: boolean;



  constructor(private login: LogginService, private route: Router) {

  }

  ngOnInit() {
    init_plugins();
    this.usuario = new UsuarioLogin();
  }

  enviar(form: NgForm) {
    if (form.invalid) {
      return;
    }


    this.login.logIn(this.usuario).subscribe(resp => {

      if (resp.hasOwnProperty('status')) {
        this.errorMessage = true;
      }
      else {
        localStorage.setItem('usuario', JSON.stringify(this.getDecodedAccessToken(resp)));
        console.log('usuario logeado');
        this.route.navigateByUrl('/dashboard');
        return false;
      }
    },
    );

  }

  /*************************
  * decodificar token
  ***********************/
  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      console.log('no se puedo decodificar el tken');
      return null;
    }
  }


}
