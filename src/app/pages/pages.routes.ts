import { Routes, RouterModule } from '@angular/router';

import { DashbouardComponent } from './dashbouard/dashbouard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';


const pagesRoutes: Routes = [
  { 
    path: 'dashboard', 
    component: DashbouardComponent,
    canActivate: [VerificaTokenGuard],
    data: { titulo: 'Dashboard'}
  },
  { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
  { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas'} },
  { path: 'promesas', component: PromesaComponent, data: { titulo: 'Promesas'} },
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'} },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema'} },
  { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
  { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador'} },
  // Mantenimientos
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [AdminGuard],
    data: { titulo: 'Mantemiento de usuarios'}
  },
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales'} },
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Perfil de médicos'} },
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar médico'} },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
