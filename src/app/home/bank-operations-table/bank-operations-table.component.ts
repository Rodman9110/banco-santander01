import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { BankAccountService } from '../../services/bank-account.service';
import { BankOperationsService } from '../../services/bank-operations.service';

@Component({
  selector: 'app-bank-operations-table',
  templateUrl: './bank-operations-table.component.html',
  styleUrls: ['./bank-operations-table.component.css']
})
export class BankOperationsTableComponent implements OnInit {

  BankOperationsUser$: Observable<any[]>;
  token: any;

  constructor( 
    private authentication: AuthenticationService,
    private bankOperationsService: BankOperationsService
    ) { }

  ngOnInit(): void {
    this.token = this.authentication.getToken();
    this.BankOperationsUser$ = this.bankOperationsService.getAllBankOperationsUser$(this.token);
  }

}
