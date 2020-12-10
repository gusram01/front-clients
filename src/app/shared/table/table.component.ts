import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ListCustomers } from '../../core/models/index';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: Observable<ListCustomers[]>;
  columns: string[];
  data: MatTableDataSource<any>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataSource
      .pipe(
        tap((data) => (this.columns = Object.keys(data[0]))),
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
}
