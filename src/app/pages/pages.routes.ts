import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HelpComponent } from './help/help.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AutenticationGuard } from '../guard/autentication.guard';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Listado' } },
      { path: 'usuario/editar', component: EditUserComponent, data: { titulo: 'Editar' } },
      { path: 'usuario/:id', component: UserProfileComponent, data: { titulo: 'Detalle de usuario' } },
      { path: 'ayuda', component: HelpComponent, data: { titulo: 'Ayuda' } },
      { path: 'app-settings', component: AccountSettingComponent, data: { titulo: 'settings' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ], canActivate: [AutenticationGuard]
  }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
