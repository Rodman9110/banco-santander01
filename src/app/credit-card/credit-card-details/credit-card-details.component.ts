import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {

  creditCards$:Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private creditCardService:CreditCardService
  ) { }

  ngOnInit(): void {
    const n_card = this.activatedRoute.snapshot.params.n_card;
    console.log(n_card);
    this.creditCards$ = this.creditCardService.getCreditCard$(n_card);

    

  }

}
