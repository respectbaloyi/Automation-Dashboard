import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-easytrace',
  templateUrl: './easytrace.component.html',
  styleUrls: ['./easytrace.component.css']
})
export class EasytraceComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void { }

}
export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Easytrace Report', date: '11/06/2021' },
  { position: 2, name: 'Easytrace Report', date: '10/06/2021' },
  { position: 3, name: 'Easytrace Report', date: '09/06/2021' },
  { position: 4, name: 'Easytrace Report', date: '08/06/2021' },
  { position: 5, name: 'Easytrace Report', date: '07/06/2021' },
  { position: 6, name: 'Easytrace Report', date: '06/06/2021' },
  { position: 7, name: 'Easytrace Report', date: '05/06/2021' },
];
