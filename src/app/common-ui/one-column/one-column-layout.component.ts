import { Component } from '@angular/core';

@Component({
  selector: 'mrx-one-column-layout',
  styleUrls: ['./one-column-layout.component.scss'],
  template: `
    <nb-layout windowMode>

      <nb-layout-header fixed>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <mrx-footer></mrx-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class OneColumnLayoutComponent {
}
