import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  GET_CREDIT_CARDS_USER ='http://localhost:8081/credit_card/getCreditCardsUser';
  GET_CREDIT_CARD = 'http://localhost:8081/credit_card/getCreditCard'

  constructor(private http: HttpClient) { }

  public getCreditCardsUser$(user_code){
    const url = this.GET_CREDIT_CARDS_USER+'/'+user_code;
    console.log(url)
    return this.http.get<any[]>(url);
  }
  public getCreditCard$(n_card){
    const url = this.GET_CREDIT_CARD+'/'+n_card;
    console.log(url)
    return this.http.get<any[]>(url);
  }
}
