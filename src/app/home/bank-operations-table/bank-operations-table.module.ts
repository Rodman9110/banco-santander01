import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankOperationsTableRoutingModule } from './bank-operations-table-routing.module';
import { BankOperationsTableComponent } from './bank-operations-table.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BankOperationsTableComponent],
  imports: [
    CommonModule,
    BankOperationsTableRoutingModule,
    SharedModule
  ]
})
export class BankOperationsTableModule { }
