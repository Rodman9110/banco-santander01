import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },

 { path: 'bankOperationTable', loadChildren: () => import('./bank-operations-table/bank-operations-table.module').then(m => m.BankOperationsTableModule) }

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
