import { Component } from '@angular/core';
import { MENU_ITEMS } from '../../config';

@Component({
  selector: 'mrx-pages',
  template: `
    <mrx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </mrx-one-column-layout>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
