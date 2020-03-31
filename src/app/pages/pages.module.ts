import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

// NG2 Charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { ProgressComponent } from './progress/progress.component';
import { DashbouardComponent } from './dashbouard/dashbouard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';

// Pipe module
import { PipesModule } from '../pipes/pipes.module';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
    declarations: [
        DashbouardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesaComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        BusquedaComponent
    ],
    exports: [
        DashbouardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class PagesModule { }
