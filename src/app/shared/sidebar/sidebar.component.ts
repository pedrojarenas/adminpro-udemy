import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.intex';
import { Usuario } from 'src/app/models/usuario.model';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario: Usuario;
  constructor( public _usuarioService: UsuarioService , public _sidebar: SidebarService ) { }

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
    this._sidebar.menu = this._usuarioService.menu
  }

}
