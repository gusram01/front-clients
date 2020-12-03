import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app-container">
    <app-layout></app-layout>
  </div>`,
  styles: [
    `
      .app-container {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 1368px;
        margin: 0 auto;
      }
    `,
  ],
})
export class AppComponent {}
