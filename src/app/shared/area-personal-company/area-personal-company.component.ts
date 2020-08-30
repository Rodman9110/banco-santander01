import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-area-personal-company',
  templateUrl: './area-personal-company.component.html',
  styleUrls: ['./area-personal-company.component.css']
})
export class AreaPersonalCompanyComponent implements OnInit {

  @Input() company;
  @Input() countries;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Datos personales:', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Datos personales:', cols: 2, rows: 1 },
        // { title: 'Card 2', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    console.log(this.company);
    console.log(this.countries);

  }

}
