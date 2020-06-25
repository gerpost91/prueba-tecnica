import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../../models/usuario.login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

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
    return this.http.post(URL, { json: JSON.stringify(datos) });
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
    return this.http.post(URL, { json: JSON.stringify(datos) }).pipe(map(resp => {
      this.guardarToken(JSON.stringify(resp));
      console.log('token guardado');
      return resp;
    }));
  }

  /******************
   * Guarda el Token***
   ********************/
  guardarToken(token: string) {

    this.userToken = token;
    localStorage.setItem('token', this.userToken);

  }

  /******************
  * Carga el Token***
  ********************/
  leerToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  /******************************
   * Varifica si esta autenticado
   *******************************/
  autenticado(): boolean {
    if (this.userToken.length > 2) {
      return true;
    } else {
      return false;
    }
  }

  /*************************
   * Eliminando el token
   ***********************/
  logOut() {
    localStorage.removeItem('token');
  }




}


