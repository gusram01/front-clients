import { Component, HostListener, OnInit } from '@angular/core';
import { MynavComponent } from './mynav/mynav.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  sideVisible: boolean;

  constructor(private myNav: MatBottomSheet) {}

  ngOnInit(): void {
    this.getWidth();
  }

  openMyNav(): void {
    this.myNav.open(MynavComponent);
  }

  @HostListener('window:resize')
  vwSize(): void {
    this.getWidth();
  }

  getWidth(): void {
    this.sideVisible = document.documentElement.getClientRects()[0].width > 600;
  }
}
