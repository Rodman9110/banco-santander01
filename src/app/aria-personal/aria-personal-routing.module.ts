import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AriaPersonalComponent } from './aria-personal.component';

const routes: Routes = [{ path: '', component: AriaPersonalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AriaPersonalRoutingModule { }
