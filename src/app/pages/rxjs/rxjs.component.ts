import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';

import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this. subscription = this.regresaObservable()
      .subscribe(
        numero => console.log('Subs ', numero),
        error => console.log('Error en el obs ', error),
        () => console.log('El observador terminó!!')
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log("salgo del rxjs");
    this.subscription.unsubscribe();
  }
  
  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        /*if (contador === 3 ) {
          clearInterval(intervalo);
          observer.complete();
        }*/
        /*if (contador === 2) {
          clearInterval(intervalo);
          observer.error('Auxilio!!!');
        }*/
      }, 1000 );
    }).pipe(
      map( resp => resp.valor ),
      filter( (valor,index) => {
        if ( (valor % 2) === 1) { return true; } 
        else { return false; }
        console.log('Filter',valor,index);
      })
    );
  }
}
