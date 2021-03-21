import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbListModule, NbMenuModule, NbSelectModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { AdminRoutingModule } from './admin-routing.module';
import { TRAFFIC_REVEAL_CARD_COMPONENTS } from './components/traffic-reveal-card';
import { CONTAINERS } from './containers';

@NgModule({
  declarations: [
    CONTAINERS,
    TRAFFIC_REVEAL_CARD_COMPONENTS
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbSelectModule,
    ChartModule,
    NgxEchartsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
