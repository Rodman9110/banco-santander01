import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SofiaComponent } from './sofia.component';

const routes: Routes = [{ path: '', component: SofiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofiaRoutingModule { }
