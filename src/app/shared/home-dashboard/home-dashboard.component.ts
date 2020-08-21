import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BankOperationsService } from 'src/app/services/bank-operations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {

  @Input() accounts;
  @Input() TotalBalance: number;
  @Input() accountsBalances: any[];
  @Input() AllBankOperationsUser: any[];
  bankOperations: Observable<any>;
  prueva: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
       
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private bankOperationsService: BankOperationsService   
    ) {}


  ngOnInit(): void {
    // this.TotalBalance = this.bankOperationsService.getLastBalance$(this.accounts);
    // this.bankOperations = this.bankOperationsService.getLastBankOperations$(this.accounts);
    console.log(this.bankOperations);
    console.log(this.accountsBalances);
    console.log(this.TotalBalance);
    
  }
}
