import { Component } from '@angular/core';

@Component({
  selector: 'mrx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://www.facebook.com/ByZeroLK" target="_blank">ByZero Technologies</a></b> 2021
    </span>
    <div class="socials">
      <a href="https://github.com/iabu94" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/iAbu94/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/iabu94" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/iabu94/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `
})
export class FooterComponent {
}
