import { Component, OnInit } from '@angular/core';
import { BankAccountService } from '../services/bank-account.service';
import { BankOperationsService } from '../services/bank-operations.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-bank-operations',
  templateUrl: './bank-operations.component.html',
  styleUrls: ['./bank-operations.component.css']
})
export class BankOperationsComponent implements OnInit {

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
  }

}
