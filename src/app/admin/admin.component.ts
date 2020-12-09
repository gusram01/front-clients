import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MynavComponent } from './mynav/mynav.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  sideVisible: boolean;

  constructor(private myNav: MatDialog) {}

  ngOnInit(): void {
    this.getWidth();
  }

  openMyNav(): void {
    this.myNav.open(MynavComponent, {
      minWidth: '20%',
      position: { bottom: '3rem' },
    });
  }

  @HostListener('window:resize')
  vwSize(): void {
    this.getWidth();
  }

  getWidth(): void {
    this.sideVisible = document.documentElement.getClientRects()[0].width > 600;
  }
}
