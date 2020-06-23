
// dependencias principales
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// dependencias secundatias
import { SharedModule } from '../shared/shared.module';

// componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// componentes
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    AccountSettingComponent,
    UserProfileComponent,
    EditUserComponent,
    HelpComponent

  ],
  exports: [
    DashboardComponent,
    AccountSettingComponent
  ],
  imports: [
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class PagesModule { }
