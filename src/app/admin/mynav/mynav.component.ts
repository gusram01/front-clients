import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.scss'],
})
export class MynavComponent {
  constructor(private myNavRef: MatDialogRef<MynavComponent>) {}

  openLink(some: any): void {
    this.myNavRef.close();
  }
}
