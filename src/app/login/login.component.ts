import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../models/usuario.login';
import { NgForm } from '@angular/forms';
import { LogginService } from '../services/services.index';
import { Router } from '@angular/router';
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
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
    }
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
        localStorage.setItem('usuario', JSON.stringify(this.usuario.email));
        console.log('usuario logeado');
        this.route.navigateByUrl('/dashboard');
        return false;
      }
    },
    );

  }


}
