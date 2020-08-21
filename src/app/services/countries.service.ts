import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL_COUNTRIES = 'http://localhost:8081/api/countries';
  URL_GET_COUNTRIS_FOR_USER_CODE ='http://localhost:8081/api/getCountryForUserCode';

  constructor(private http: HttpClient) { }

  public getAllCountries$(){
    const url = this.URL_COUNTRIES;
    return this.http.get<any[]>(url);
  }
 public getCountriesId$(id_country){
    const url = this.URL_COUNTRIES+'/'+id_country;
    console.log(url)
    return this.http.get<any[]>(url);
  }
  public getCountryForUserCode$(user_code){
    const url = this.URL_GET_COUNTRIS_FOR_USER_CODE+'/'+user_code;
    console.log(url)
    return this.http.get<any[]>(url);
  }
  
}
