import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: ``
})
export class ByContryPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCountry( term: string ):void {
    this.countriesService.searchCountry( term )
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}
