import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showNav: boolean;

  constructor() {
    this.getWidth();
  }

  @HostListener('window: resize')
  viewportWidth() {
    this.getWidth();
  }

  private getWidth() {
    this.showNav = document.documentElement.getClientRects()[0].width > 600;
  }
}
