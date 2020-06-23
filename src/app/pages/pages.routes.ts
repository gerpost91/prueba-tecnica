import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HelpComponent } from './help/help.component';
import { EditUserComponent } from './edit-user/edit-user.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'usuario/:id', component: UserProfileComponent },
            { path: 'usuario/editar/:id', component: EditUserComponent },
            { path: 'ayuda', component: HelpComponent},
            { path: 'app-settings', component: AccountSettingComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
