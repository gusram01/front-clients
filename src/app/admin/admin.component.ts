import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  sideVisible: boolean;

  constructor() {}

  ngOnInit(): void {
    this.getWidth();
  }

  @HostListener('window:resize')
  vwSize(): void {
    this.getWidth();
  }

  getWidth(): void {
    this.sideVisible = document.documentElement.getClientRects()[0].width > 600;
  }
}
