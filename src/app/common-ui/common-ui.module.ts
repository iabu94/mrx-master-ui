import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OneColumnLayoutComponent } from './one-column/one-column-layout.component';

@NgModule({
  declarations: [OneColumnLayoutComponent, FooterComponent, NotFoundComponent, HeaderComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbButtonModule,
    MatRippleModule,
    NbIconModule,
    NbSelectModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule
  ],
  exports: [OneColumnLayoutComponent]
})
export class CommonUiModule { }
