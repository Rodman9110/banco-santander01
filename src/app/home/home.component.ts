import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { BankAccountService } from '../services/bank-account.service';
import { BankOperationsService } from '../services/bank-operations.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts$: Observable<any>;
  accountsBalances$: Observable<any[]>;
  AllBankOperationsUser$: Observable<any[]>;
  token: any;
  TotalBalance$;
  constructor(
    private authentication: AuthenticationService,
    private bankAccountService: BankAccountService,
    private bankOperationsService: BankOperationsService
   
  ) { }

  ngOnInit(): void {
    this.token = this.authentication.getToken();
    this.accounts$ = this.bankAccountService.getBankAccounts$(this.token);
    this.TotalBalance$ = this.bankOperationsService.getTotalBalance$(this.token);
    this.accountsBalances$ = this.bankOperationsService.getAccountBalance$(this.token);
    this.AllBankOperationsUser$ = this.bankOperationsService.getAllBankOperationsUser$(this.token);
    // this.TotalBalance$ = this.bankOperationsService.getLastBalance$(this.accounts$);
    // console.log(this.TotalBalance$);
    console.log(this.TotalBalance$);
    console.log(this.accounts$);
  }

}
