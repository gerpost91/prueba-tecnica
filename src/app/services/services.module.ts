import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// servicios

import { SettingsService } from './settings/settings.service';
import { UserService } from './user/user.service';



@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    UserService
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
