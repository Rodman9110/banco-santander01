import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankOperationsRoutingModule } from './bank-operations-routing.module';
import { BankOperationsComponent } from './bank-operations.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BankOperationsComponent],
  imports: [
    CommonModule,
    BankOperationsRoutingModule,
    SharedModule
  ]
})
export class BankOperationsModule { }
