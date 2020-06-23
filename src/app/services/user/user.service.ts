import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  /***********************
   Optener todos los usuarios
    ****************************/
  getUsers() {
    const URL = 'http://www.calypsotech.it/api/users';
    return this.http.get(URL);
  }



  /***********************
  Optener un  usuario
   ****************************/
  getUser(id: number) {
    const URL = `http://www.calypsotech.it/api/user/detail/${id}`;
    return this.http.get(URL);
  }






}
