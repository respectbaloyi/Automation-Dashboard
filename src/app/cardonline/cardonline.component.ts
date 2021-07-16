import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cardonline',
  templateUrl: './cardonline.component.html',
  styleUrls: ['./cardonline.component.css']
})
export class CardonlineComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }
  ngOnInit() { }
}
export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Report', date: '11/06/2021' },
  { position: 2, name: 'Report', date: '10/06/2021' },
  { position: 3, name: 'Report', date: '09/06/2021' },
  { position: 4, name: 'Report', date: '08/06/2021' },
  { position: 5, name: 'Report', date: '07/06/2021' },
  { position: 6, name: 'Report', date: '06/06/2021' },
  { position: 7, name: 'Report', date: '05/06/2021' },
];