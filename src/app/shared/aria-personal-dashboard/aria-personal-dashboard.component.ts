import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aria-personal-dashboard',
  templateUrl: './aria-personal-dashboard.component.html',
  styleUrls: ['./aria-personal-dashboard.component.css']
})
export class AriaPersonalDashboardComponent {

  @Input() customer;
  @Input() countries;
  // countries:Observable<any>;
  /** Based on the screen size, switch from standard to one column per row */
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
    ) {}

  ngOnInit() {
    console.log(this.customer);
    // console.log(this.filmId)
    // this.countries = this.countriesService.getCountriesId$(this.customer.id_nationality);
    console.log(this.countries);
  }
}
