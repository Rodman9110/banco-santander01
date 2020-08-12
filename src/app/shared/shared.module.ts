import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AriaPersonalDashboardComponent } from './aria-personal-dashboard/aria-personal-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { BuzonDashboardComponent } from './buzon-dashboard/buzon-dashboard.component';




@NgModule({
  declarations: [AriaPersonalDashboardComponent, LoginFormComponent, HomeDashboardComponent, BuzonDashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
    
  ],
  exports: [AriaPersonalDashboardComponent, LoginFormComponent, HomeDashboardComponent, BuzonDashboardComponent]
})
export class SharedModule { }
