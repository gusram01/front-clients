import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MynavComponent } from '../mynav/mynav.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private myNav: MatDialog) {}

  ngOnInit(): void {}

  openMyNav(): void {
    this.myNav.open(MynavComponent, {
      minWidth: '20%',
      position: { bottom: '3rem' },
    });
  }
}
