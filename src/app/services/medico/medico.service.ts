import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from 'src/app/models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  totalMedicos: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService:UsuarioService
  ) { }

  cargarMedicos() {
    let url = `${URL_SERVICIOS}/medico`;
    return this.http.get(url)
      .map( (resp: any) => {
        this.totalMedicos = resp.total;
        return resp.medicos;
      });
  }
  
  buscarMedicos(termino: string) {
    let url = `${URL_SERVICIOS}/busqueda/coleccion/medico/${termino}`;
    return this.http.get(url)
      .map( (resp: any) => {
        this.totalMedicos = resp.length;
        return resp.medico;
      });
  }

  borrarMedico( id: string ) {
    let url = `${URL_SERVICIOS}/medico/${id}?token=${this._usuarioService.token}`;
    return this.http.delete(url)
      .map( (resp: any) => {
        swal('Médico borrado','Médico borrado correctamente','success');
        return true;
      });
  }

  guardarMedico( medico: Medico) {
    if (medico._id) { // Actualizando  médico
      let url = `${URL_SERVICIOS}/medico/${medico._id}?token=${this._usuarioService.token}`;
      return this.http.put(url, medico)
        .map( (resp: any) => {
          swal('Médico actualizado', medico.nombre, 'success');
          return resp.medico;
        });
    }
    else {  // Creando médico
      let url = `${URL_SERVICIOS}/medico?token=${this._usuarioService.token}`;
      return this.http.post(url, medico)
        .map( (resp: any) => {
          swal('Médico grabado', medico.nombre, 'success');
          return resp.medico;
        });
    }
  }

  cargarMedico( id ) {
    let url = `${URL_SERVICIOS}/medico/${id}`;
    return this.http.get(url).map( (resp: any) => resp.medico);
  }
}
