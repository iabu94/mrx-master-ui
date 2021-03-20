import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { OneColumnLayoutComponent } from './one-column/one-column-layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [OneColumnLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  exports: [OneColumnLayoutComponent]
})
export class CommonUiModule { }
