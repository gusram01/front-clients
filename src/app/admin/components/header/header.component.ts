import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
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
