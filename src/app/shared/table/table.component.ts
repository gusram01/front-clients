import {
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

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: Observable<ListCustomers[]>;
  columns: string[];
  data: any = [];
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }
  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  }

  getData(): void {
    this.dataSource.subscribe((data) => {
      this.data = data.map((item) => {
        const aux = { ...item };
        const {
          userid,
          username,
          clientid,
          email,
          _id,
          ...returningData
        } = aux;
        return { ...returningData };
      });
      this.columns = Object.keys(this.data[0]);
      this.isLoading = false;
    });
  }
}
