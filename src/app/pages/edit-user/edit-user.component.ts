import { Component } from '@angular/core';
import { UserService, LogginService } from '../../services/services.index';
import { IUser } from '../../models/user';
import { UsuarioLogin } from '../../models/usuario.login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent {

  usuario: UsuarioLogin;
  errorMessage: boolean;
  succesMessage: boolean;
  terminos = false;



  constructor(private login: LogginService) {


  }


  enviar(form: NgForm) {

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
