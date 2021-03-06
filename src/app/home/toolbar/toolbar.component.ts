import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() showNav: boolean;
  checked: boolean;

  constructor(private theme: ThemeService) {
    this.checked = this.theme.default;
  }

  ngOnInit(): void {}

  changeTheme() {
    this.checked = !this.checked;
    this.theme.default = this.checked;
  }
}
