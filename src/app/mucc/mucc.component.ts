import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mucc',
  templateUrl: './mucc.component.html',
  styleUrls: ['./mucc.component.css']
})
export class MuccComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() { }
}
export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Mucc Report', date: '11/06/2021' },
  { position: 2, name: 'Mucc Report', date: '10/06/2021' },
  { position: 3, name: 'Mucc Report', date: '09/06/2021' },
  { position: 4, name: 'Mucc Report', date: '08/06/2021' },
];