import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor(@Inject(DOCUMENT) private document) {
    this.cargarAjustes();
  }

  // Función para hacer persistente el tema al recargar la página
  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  // Función para recuperar los ajustes que tiene el usuario
  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema (this.ajustes.tema);
    } else {
      this.aplicarTema (this.ajustes.tema);
    }
  }

  aplicarTema(tema: string) {
    let urlTema = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', urlTema );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = urlTema;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
