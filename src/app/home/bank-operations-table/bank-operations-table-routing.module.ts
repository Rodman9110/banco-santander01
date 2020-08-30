import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankOperationsTableComponent } from './bank-operations-table.component';

const routes: Routes = [{ path: '', component: BankOperationsTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankOperationsTableRoutingModule { }
