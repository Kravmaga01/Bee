import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'formsMentoria';

  ngOnInit(): void {
    console.log(this.newContries.name);
    this.newContries.name = 'Canada';
  }
  public newContries = {
    name: 'Colombia',
    capital: '',
  };

  private countries: object[] = [];

  public saveCountry(): void {
    this.newContries.capital = `City ${this.newContries.capital}`;
    this.countries.push(this.newContries);
    console.log(this.countries);
  }
}
