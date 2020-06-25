import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../models/usuario.login';
import { NgForm } from '@angular/forms';
import { LogginService } from '../services/services.index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: UsuarioLogin;
  errorMessage: boolean;
  terminos = false;

  constructor(private login: LogginService, private route: Router) {

  }

  ngOnInit() {
    this.usuario = new UsuarioLogin();
  }

  /* Esta funcion realiza el posteo */
  enviar(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.login.createUser(this.usuario).subscribe(resp => {
      console.log('usuario registrado');
      localStorage.setItem('usuario', JSON.stringify(this.usuario.email));
      this.route.navigateByUrl('/login');

    }, (err) => {
      this.errorMessage = true;
    }

    );

  }


}
