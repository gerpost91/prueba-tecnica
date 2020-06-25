import { Component } from '@angular/core';
import { UserService } from '../../services/services.index';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent {

  usuario: IUser;

  constructor(private user: UserService) {


  }


  getUser(id: number) {
    this.user.getUser(id).subscribe((data: any) => {
      this.usuario = data.user;
      console.log('data', this.usuario);
    });

  }


}
