import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChanges( newValue: number) {
    // let elementHTML: any = document.getElementsByName('porcentaje')[0];

    // console.log(elementHTML.value);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elementHTML.value = this.porcentaje;
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor( valor: number ) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
    } else if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = this.porcentaje + valor;
    }
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
    return;
  }
}
