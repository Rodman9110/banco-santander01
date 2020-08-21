import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CustomersService } from '../services/customers.service';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-aria-personal',
  templateUrl: './aria-personal.component.html',
  styleUrls: ['./aria-personal.component.css']
})
export class AriaPersonalComponent implements OnInit {
  countries$: Observable<any>;
  customer$: Observable<any>;
  token: any;
  constructor(
     private authentication: AuthenticationService,
     private customersServices: CustomersService,
     private countriesService: CountriesService
     ) { }

  ngOnInit(): void {
    this.token = this.authentication.getToken();
    console.log(this.token);
    this.customer$ = this.customersServices.getCustomer$(this.token);
    this.countries$ = this.countriesService.getCountryForUserCode$(this.token);

    

  }

}
