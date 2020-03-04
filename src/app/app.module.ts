import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas

// Modulos
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
