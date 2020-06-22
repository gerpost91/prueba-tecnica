import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(@Inject(DOCUMENT) private _document, private _ajustes: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }


  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }


  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    // remueve la clase de cualquiera que tenga la clase working
    for (const referencia of selectores) {
      referencia.classList.remove('working');
    }
    // la agrega al que llamo a esta funcion
    link.classList.add('working');

  }


  // aplica el check basado en lo que hay en local Storage
  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    // obtengo el tema
    const tema = this._ajustes.ajustes.tema;

    for (const referencia of selectores) {
      /* Compara si el atributo personalizado del html es igual al nombre
       del tema con el valor actual del service */
      if (referencia.getAttribute('data-theme') === tema) {
        referencia.classList.add('working');
        // para eficientizar el for y que no siga ejecutando
        break;
      }
    }
  }



}
