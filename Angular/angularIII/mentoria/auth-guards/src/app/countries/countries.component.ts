import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from './countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries$: Observable<any[]> | undefined;

  constructor(
    private router: Router,
    private readonly countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countries$ = this.countriesService.getCoutries();
  }

  goToRoot() {
    this.router.navigate(['/']);
  }

  goCities() {
    this.router.navigate(['countries', 'cities']);
  }
}
