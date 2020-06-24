import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../../models/usuario.login';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor(private http: HttpClient) { }

  /******************
  *crear usuario
   ****************/
  createUser(usuario: UsuarioLogin) {

    const URL = 'http://www.calypsotech.it/api/register';

    const datos = {
      name: usuario.nombre,
      surname: usuario.apellido,
      email: usuario.email,
      password: usuario.password
    };

    console.log('json', datos);
    return this.http.post(URL, { json: datos });
  }


  /********************
    inicio de session
    ********************/
  logIn(usuario: UsuarioLogin) {

    const URL = 'http://www.calypsotech.it/api/login';

    const datos = {
      email: usuario.email,
      password: usuario.password
    };

    console.log('json', datos);
    return this.http.post(URL, { json: datos });
  }

  logOut() { }



}


