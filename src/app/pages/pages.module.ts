
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';



// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingComponent

  ],
  exports: [
    DashboardComponent,
    AccountSettingComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule { }
