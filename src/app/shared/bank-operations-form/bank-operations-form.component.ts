import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankOperationsService } from 'src/app/services/bank-operations.service';

@Component({
  selector: 'app-bank-operations-form',
  templateUrl: './bank-operations-form.component.html',
  styleUrls: ['./bank-operations-form.component.css']
})
export class BankOperationsFormComponent implements OnInit {


  @Input() error: string | null;
  @Input() accounts;
  concepto: any;
  public bankOperationsForm: FormGroup;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 2 },
        
      ];
    })
  );

  constructor(
    private bankOperationsService: BankOperationsService,
    private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
  
    ) {

      this.bankOperationsForm = this.formBuilder.group({
        n_account:['', Validators.required], 
        concept:['', Validators.required],
        type:['', Validators.required], 
        quantity:['', Validators.required], 
        balance:['', Validators.required], 
       });
     }

  ngOnInit(): void {
    console.log(this.accounts);
   
  }
  
  ClickRunBankOperation(){
    
    this.bankOperationsService.AddBankOperation$(this.bankOperationsForm.value).subscribe();  
    console.log(this.bankOperationsForm.value);

  }

}
