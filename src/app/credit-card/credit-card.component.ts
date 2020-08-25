import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../services/credit-card.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  creditCards$: Observable<any[]>;
  token: any;

  constructor(
    private authentication: AuthenticationService,
    private creditCardService: CreditCardService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // const n_card = this.activatedRoute.snapshot.params.n_card;
    // console.log(n_card);
    this.token = this.authentication.getToken();
    this. creditCards$ = this.creditCardService.getCreditCardsUser$(this.token);

  }

}
