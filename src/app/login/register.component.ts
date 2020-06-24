import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../models/usuario.login';
import { NgForm } from '@angular/forms';
import { LogginService } from '../services/services.index';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: UsuarioLogin;
  terminos = false;

  constructor(private login: LogginService) {

  }

  ngOnInit() {
    this.usuario = new UsuarioLogin();
  }


  enviar(form: NgForm) {

    if (form.invalid) {
      return;
    }

    console.log(this.usuario);

    this.login.createUser(this.usuario).subscribe(resp => {
      console.log(resp);
    });

  }


}
