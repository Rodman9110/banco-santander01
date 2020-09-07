import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CustomersService } from '../services/customers.service';
import { CountriesService } from '../services/countries.service';
import { CompanyService } from '../services/company.service';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-aria-personal',
  templateUrl: './aria-personal.component.html',
  styleUrls: ['./aria-personal.component.css']
})
export class AriaPersonalComponent implements OnInit {
  countries$: Observable<any>;
  countriesCompany$: Observable<any>;
  customer$: Observable<any>;
  companies$: Observable<any>;
  token: any;
  constructor(
     private authentication: AuthenticationService,
     private customersServices: CustomersService,
     private countriesService: CountriesService,
     private companyService: CompanyService
     ) { }

  ngOnInit(): void {
    this.token = this.authentication.getToken();
    console.log(this.token);
    this.customer$ = this.customersServices.getCustomer$(this.token);
    this.countries$ = this.countriesService.getCountryForUserCode$(this.token);
    this.companies$ = this.companyService.getCompany$(this.token);
    this.countriesCompany$ = this.countriesService.getCountryForUserCodeCompany$(this.token);
    

  }

}
