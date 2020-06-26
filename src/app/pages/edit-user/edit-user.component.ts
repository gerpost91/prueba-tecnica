import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../services/services.index';
import { UsuarioLogin } from '../../models/usuario.login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {

  usuario: UsuarioLogin;
  errorMessage: boolean;
  succesMessage: boolean;
  terminos = false;
  usuarioCache: any;



  constructor(private login: LogginService) {
    if (localStorage.getItem('usuario')) {
      this.usuarioCache = JSON.parse(localStorage.getItem('usuario'));
    }
  }

  ngOnInit() {
    this.usuario = new UsuarioLogin();
    this.usuario.nombre = this.usuarioCache.name;
    this.usuario.apellido = this.usuarioCache.surname;
    this.usuario.email = this.usuarioCache.email;
  }


  enviar(form: NgForm) {
    console.log(form);

    if (form.invalid) {
      return;
    }
    this.login.editUser(this.usuario).subscribe(resp => {
      console.log('usuario actualizado');
      this.succesMessage = true;
    }, (err) => {
      this.errorMessage = true;
    }
    );

  }




}
