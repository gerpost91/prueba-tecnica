import { Component } from '@angular/core';
import { UserService } from '../../services/services.index';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [
  ]
})
export class UserProfileComponent {

  usuario: IUser;

  constructor(private user: UserService, private router: ActivatedRoute) {
    // toma el parametro de la peticiony ejecuta la funcion get user pasanfo este parametro
    this.router.params.subscribe(params => {
      this.getUser(params.id);
    });
  }

  // obtien el usuario desde el servicio
  getUser(id: number) {
    this.user.getUser(id).subscribe((data: any) => {
      this.usuario = data.user;
      console.log('data', this.usuario);
    });
  }

}
