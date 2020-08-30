import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BankOperationsInterface } from 'src/app/Models/BankOperations';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-bank-operations-shared',
  templateUrl: './table-bank-operations-shared.component.html',
  styleUrls: ['./table-bank-operations-shared.component.css']
})
export class TableBankOperationsSharedComponent implements OnInit {

  @Input() BankOperationsUser: BankOperationsInterface[];
  dataSource = new MatTableDataSource(this.BankOperationsUser);
  displayedColumns: string[] = ['n_account','concept','type','quantity','balance','date_operation'];
  constructor() { }

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit(): void {
    console.log(this.BankOperationsUser);
    this.dataSource.data = this.BankOperationsUser;
    this.dataSource.paginator = this.paginator;
  }

}
