import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableBankOperationsRoutingModule } from './table-bank-operations-routing.module';
import { TableBankOperationsComponent } from './table-bank-operations.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TableBankOperationsComponent],
  imports: [
    CommonModule,
    TableBankOperationsRoutingModule,
    SharedModule
  ]
})
export class TableBankOperationsModule { }
