import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document) { }

  ngOnInit(): void {
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    let urlTema = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', urlTema );
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores ){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
