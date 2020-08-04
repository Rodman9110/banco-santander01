import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AriaPersonalDashboardComponent } from './aria-personal-dashboard/aria-personal-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [AriaPersonalDashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  exports: [AriaPersonalDashboardComponent]
})
export class SharedModule { }
