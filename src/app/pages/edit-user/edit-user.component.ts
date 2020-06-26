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
export class EditUserComponent  implements OnInit{

  usuario: UsuarioLogin;
  errorMessage: boolean;
  succesMessage: boolean;
  terminos = false;



  constructor(private login: LogginService) { }

  ngOnInit() {
    this.usuario = new UsuarioLogin();
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
