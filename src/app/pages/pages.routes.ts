import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashbouardComponent } from './dashbouard/dashbouard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const pagesRoutes: Routes = [
    {    path: '',
            component: PagesComponent,
            canActivate: [LoginGuardGuard],
            children: [
            { path: 'dashboard', component: DashbouardComponent, data: { titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas'} },
            { path: 'promesas', component: PromesaComponent, data: { titulo: 'Promesas'} },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema'} },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
            // Mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantemiento de usuarios'} },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
          ]
      }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
