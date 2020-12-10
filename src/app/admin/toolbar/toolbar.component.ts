import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  title: Observable<string>;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.actualPath();
  }

  actualPath(): void {
    this.title = this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => !event.snapshot.firstChild),
      map((data) => data.snapshot.data.title)
    );
  }

  logout(): void {
    localStorage.removeItem('myClient$T0k3n');
    this.router.navigateByUrl('/');
  }
}
