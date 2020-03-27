import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../../models/hospital.model';
import { HospitalService } from '../../../services/service.intex';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
  hospitales: Hospital [] = [];
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit(): void {
    this.cargarHospitales();
    this._modalUploadService.notificacion
    .subscribe( (resp: any) => this.cargarHospitales() );
  }

  mostrarModal(id: string) {
    this._modalUploadService.mostrarModal('hospitales', id );
  }

  cargarHospitales() {
    this.cargando = true;
    this._hospitalService.cargarHospitales()
      .subscribe( (resp: any) => {
        this.totalRegistros = this._hospitalService.totalHospitales;
        this.hospitales = resp.hospitales;
      });
    console.log(this. hospitales);
    this.cargando = false;
  }

  borrarHospital(hospital: Hospital) {
    swal({
        title: '¿Está seguro?',
        text: `Está a punto de borrar el ${hospital.nombre}`,
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    })
    .then((borrar) => {
      if (borrar) {
        return this._hospitalService.borrarHospital(hospital._id)
          .subscribe( borrado => {
              this.cargarHospitales();
              swal('Hospital borrado', 'El hospital ha sido eliminado correctamente', 'success');
          });
      }
    });
  }

  guardarHospital( hospital: Hospital, nombre: string ) {
    hospital.nombre = nombre;
    this._hospitalService.actualizarHospital( hospital )
      .subscribe();
  }

  buscarHospital( termino: string) {
    if (termino.length <= 0) { this.cargarHospitales(); return; }
    this._hospitalService.buscarHospital(termino)
      .subscribe( (hospitales: Hospital[]) => {
        this.hospitales = hospitales;
        this.totalRegistros = hospitales.length;
      });
  }

  crearHospital() {
    swal({
      title: 'Crear hospital',
      text: 'Intruduzca el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then ( (resp: string) => {
      if (resp.length === 0 ) {
        return;
      }
      else {
        this._hospitalService.crearHospital(resp).subscribe();
        this.cargarHospitales();
        swal('Hospital creado', 'El hospital ha sido creado correctamente', 'success');
      }
    });
  }
}
