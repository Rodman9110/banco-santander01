import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-card-details-shared',
  templateUrl: './credit-card-details-shared.component.html',
  styleUrls: ['./credit-card-details-shared.component.css']
})
export class CreditCardDetailsSharedComponent implements OnInit {

  @Input()  creditCards;
  n_card1:any;
  n_card2:any;
  n_card3:any;
  n_card4:any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) 
  {
    const n_card = this.activatedRoute.snapshot.params.n_card;
    console.log(n_card);

    




  }

  ngOnInit(): void {

    const n_card = this.activatedRoute.snapshot.params.n_card;
     this.n_card1 = n_card.substring(0,4);
     this.n_card2 = n_card.substring(4,8);
     this.n_card3 = n_card.substring(8,12);
     this.n_card4 = n_card.substring(12,16);
        
  }

}
