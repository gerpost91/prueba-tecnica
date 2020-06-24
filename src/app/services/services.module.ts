import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// servicios

import { SettingsService } from './settings/settings.service';
import { UserService } from './user/user.service';
import { LogginService } from './user/loggin.service';




@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    UserService,
    LogginService,
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
