import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CONTAINERS } from './containers';

@NgModule({
  declarations: [CONTAINERS],
  imports: [
    CommonModule,
    CommonUiModule,
    NbMenuModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
