import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from '../../services/medico/medico.service';
import { HospitalesComponent } from '../hospitales/hospitales/hospitales.component';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
  medicos: Medico[] = [];

  constructor(
    public _medicoService: MedicoService
  ) { }

  ngOnInit(): void {
    this.cargarMedicos();
  }

  cargarMedicos() {
    this._medicoService.cargarMedicos()
      .subscribe( resp => this.medicos = resp );
  }

  borrarMedico( medico: Medico ) {
    this._medicoService.borrarMedico( medico._id )
      .subscribe( resp => {
        this.cargarMedicos();
      });
  }

  buscarMedico(termino: string) {
    if (termino.length === 0) { this.cargarMedicos(); return; }
    this._medicoService.buscarMedicos(termino)
      .subscribe( resp => this.medicos = resp );
  }
}
