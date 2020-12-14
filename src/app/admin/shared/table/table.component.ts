import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: Observable<any[]>;
  @Input() listActions: string[];

  columns: string[];
  displayedColumns: string[];
  data: MatTableDataSource<any>;
  isLoading = true;

  @Output() idEvent = new EventEmitter<string | number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataSource
      .pipe(
        tap(
          (data) =>
            (this.columns = Object.keys(data[0]).filter(
              (item) => item !== '_id'
            ))
        ),
        tap((data) =>
          !data
            ? (this.data = new MatTableDataSource([]))
            : (this.data = new MatTableDataSource(data))
        )
      )
      .subscribe(
        () => {
          this.data.sort = this.sort;
          this.data.paginator = this.paginator;
          this.isLoading = false;
          this.displayedColumns = ['actions', ...this.columns];
        },
        (err) => {
          this.isLoading = false;
          this.data = new MatTableDataSource([]);
        }
      );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }
  actions(event: Event, id: string | number, action: string): void {
    if (action === 'details') {
      this.router.navigate([this.actualPath(), id]);
    }
    this.idEvent.emit(id);
  }

  actualPath(): string {
    //@ts-expect-error
    return this.activatedRoute.snapshot._routerState.url;
  }
}
