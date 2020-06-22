import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  ajustes: Ajustes = {
    temaURL: 'assets/css/colors/default-dark.css',
    tema: 'dafault'
  };
  // tslint:disable-next-line: variable-name
  constructor(@Inject(DOCUMENT) private _document: any) {
    this.cargarAjustes();
  }

  // guarda los ajustes en el local Storage
  guardarAjustes() {
    console.log('guardando en loca Storage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }


  // extrae de los ajustes loas configuraciones
  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // llama a la funcion y aplica el tema
      this.aplicarTema(this.ajustes.tema);
      console.log('ajustes cargados de local Storage');
    }
    else{
      console.log('valores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }

  }

  // se encarga de guardar y aplicar el tema
  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaURL = url;
    this.guardarAjustes();
  }



}

// se declara una interface para tener un modelo
interface Ajustes {
  tema: string;
  temaURL: string;
}
