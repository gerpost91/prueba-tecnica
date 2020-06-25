import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/services.index';
import { IUser } from '../../models/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit{


  usuarios: IUser[] = [];

  constructor(private user: UserService) { }
  ngOnInit() {
    this.getAllusers();
  }

  /*************************
  Optener todos los usuarios
  **************************/
  getAllusers() {
    this.user.getUsers().subscribe((data: any) => {
      this.usuarios = data.users;
    });
  }

}
