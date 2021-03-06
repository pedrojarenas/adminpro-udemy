import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.intex';
import { Usuario } from '../models/usuario.model';
import { subscribeOn } from 'rxjs/operators';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean = false;
  auth2: any;

  constructor( public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    init_plugins();
    this.email = localStorage.getItem('email') || '';
    this.recuerdame = (this.email.length > 1);
    this.googleInit();
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '352933288718-f2kc0bikkr9rk1jeibdrbdithk8nedch.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  attachSignIn( element )  {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      let token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token)
        .subscribe( () => window.location.href = '#/dashboard');
    });
  }

  ingresar( forma: NgForm ) {
    if (forma.invalid) { return; }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe( correcto => this.router.navigate(['/dashboard']) );
  }
}
