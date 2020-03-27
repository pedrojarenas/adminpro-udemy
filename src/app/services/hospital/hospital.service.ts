import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from 'src/app/config/config';
import { Hospital } from '../../models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  token: string;
  totalHospitales: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
    ) {
  }

  cargarHospitales() {
    let url = `${URL_SERVICIOS}/hospital`;
    return this.http.get(url)
      .map( (resp: any) => {
        this.totalHospitales = resp.total;
        return resp;
      });
  }

  borrarHospital(id: string) {
    let url = `${URL_SERVICIOS}/hospital/${id}?token=${this._usuarioService.token}`;
    return this.http.delete(url)
      .map( (resp: any) => {
        return true;
      });
  }

  actualizarHospital( hospital: Hospital) {
    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioService.token;
    return this.http.put(url, hospital)
      .map( (resp: any) => {
        swal('Hospital actualizado', hospital.nombre, 'success');
        return true;
      });
  }

  buscarHospital( termino: string) {
    let url = `${URL_SERVICIOS}/busqueda/coleccion/hospital/${termino}`;
    return this.http.get(url)
      .map( (resp: any) => resp.hospital );
  }

  crearHospital( nombre: string ) {
    let url = `${URL_SERVICIOS}/hospital?token=${this._usuarioService.token}`;
    return this.http.post(url, { nombre })
      .map( (resp: any) => {
        swal('Hospital creado', nombre, 'success');
        return resp.hospital;
      });
  }

  obtenerHospital( id: string ) {
    let url = `${URL_SERVICIOS}/hospital/${ id }`;
    console.log('obtener hospitales');
    return this.http.get(url)
      .map( (resp: any) => resp.hospital );
  }
}
