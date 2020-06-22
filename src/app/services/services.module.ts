import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// servicios
import { SharedService } from './shared/shared.service';
import { SidebarService } from './shared/sidebar.service';
import { SettingsService } from './settings/settings.service';



@NgModule({
  declarations: [],
  providers: [
    SharedService,
    SidebarService,
    SettingsService
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
