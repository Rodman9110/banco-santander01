import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { HttpLoginService } from '../services/http-login.service';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countries$: Observable<any[]>;


  constructor(
    private customersService: CustomersService,
    private countriesService: CountriesService,
    private httpLogin: HttpLoginService,
    private companyService: CompanyService

  ) { }

  ngOnInit(): void {

    this.countries$ = this.countriesService.getAllCountries$();

  }

}
