import { Component } from '@angular/core';
import { SettingsService } from './services/service.intex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';

  constructor( public _ajustes: SettingsService) {
    this._ajustes.cargarAjustes();
  }
}
