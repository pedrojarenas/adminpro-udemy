import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: []
})
export class PromesaComponent implements OnInit {

  constructor() {
    this.contarTres().then (
      mensaje => console.log('Terminado', mensaje)
     )
     .catch( error => console.log('Error en la promesa', error));

   }

  ngOnInit(): void {
  }

  contarTres(): Promise <boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }
      }, 1000 );
    });
  }
}
