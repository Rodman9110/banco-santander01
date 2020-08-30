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
import { LoadingComponent } from './loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BankOperationsFormComponent } from './bank-operations-form/bank-operations-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormCompanyComponent } from './register-form-company/register-form-company.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardDetailsSharedComponent } from './credit-card-details-shared/credit-card-details-shared.component';
import { SofiaDashboardComponent } from './sofia-dashboard/sofia-dashboard.component';
import { Loading02Component } from './loading02/loading02.component';
import { AreaPersonalCompanyComponent } from './area-personal-company/area-personal-company.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableBankOperationsSharedComponent } from './table-bank-operations-shared/table-bank-operations-shared.component';





@NgModule({
  declarations: [AriaPersonalDashboardComponent, LoginFormComponent, HomeDashboardComponent, BuzonDashboardComponent, LoadingComponent, BankOperationsFormComponent, RegisterFormComponent, RegisterFormCompanyComponent, CreditCardListComponent, CreditCardDetailsSharedComponent, SofiaDashboardComponent, Loading02Component, AreaPersonalCompanyComponent, TableBankOperationsSharedComponent],
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
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  exports: [AriaPersonalDashboardComponent, LoginFormComponent, HomeDashboardComponent, BuzonDashboardComponent, LoadingComponent, BankOperationsFormComponent, RegisterFormComponent, RegisterFormCompanyComponent, CreditCardListComponent, CreditCardDetailsSharedComponent, SofiaDashboardComponent, Loading02Component, AreaPersonalCompanyComponent, TableBankOperationsSharedComponent]
})
export class SharedModule { }
