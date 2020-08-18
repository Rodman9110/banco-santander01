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
  token: any;
  constructor(
    private authentication: AuthenticationService,
    private bankAccountService: BankAccountService,
    private bankOperationsService: BankOperationsService
   
  ) { }

  ngOnInit(): void {
    this.token = this.authentication.getToken();
    this.accounts$ = this.bankAccountService.getBankAccounts$(this.token);
    console.log(this.accounts$);
  }

}
