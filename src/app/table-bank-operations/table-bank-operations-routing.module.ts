import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableBankOperationsComponent } from './table-bank-operations.component';

const routes: Routes = [{ path: '', component: TableBankOperationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableBankOperationsRoutingModule { }
