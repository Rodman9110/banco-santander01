import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankOperationsComponent } from './bank-operations.component';

const routes: Routes = [{ path: '', component: BankOperationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankOperationsRoutingModule { }
