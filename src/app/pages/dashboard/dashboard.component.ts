import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/services.index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {


  usuarios: any = [];

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllusers();
  }


  /*
  Optener todos los usuarios
  **/
  getAllusers() {
    this.user.getUsers().subscribe((data: any) => {
      this.user = data.users;
      this.usuarios = this.user;
    });
  }


  verUsuario(id: number) {
  console.log(id);
    // this.router.navigate(['/user', id]);
  }




}
