import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: IUser;

  constructor() { }

  ngOnInit() {


  }

}
