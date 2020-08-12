import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzonComponent } from './buzon.component';

const routes: Routes = [{ path: '', component: BuzonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuzonRoutingModule { }
