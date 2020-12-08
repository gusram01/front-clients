import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.scss'],
})
export class MynavComponent {
  constructor(private myNavRef: MatBottomSheetRef<MynavComponent>) {}

  openLink(event: MouseEvent): void {
    this.myNavRef.dismiss();
    event.preventDefault();
  }
}
