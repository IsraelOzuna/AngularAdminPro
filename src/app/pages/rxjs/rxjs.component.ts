import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    this.regresaObservable().pipe(
      retry (2)
    )
    // Función Subscribe cuando se ejecuta un Next o recibo un string de datos
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log ('El observador terminó!')
    );
  }

  ngOnInit(): void {
  }

  regresaObservable(): Observable<any> {
    const obs = new Observable(  (observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval( () => {
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        // if (contador === 2) {
          // clearInterval(intervalo);
          // observer.error('Auxilio');
        // }

      }, 1000);
    }).pipe(
      map( respuesta => respuesta.valor),
      filter( (valor, index) => {
        if( (valor % 2 ) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );

    return obs;
  }

}
