import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './countries.service';

@NgModule({
  declarations: [CountriesComponent, CountryDetailComponent],
  imports: [CommonModule, CountriesRoutingModule, HttpClientModule],
  exports: [CountriesComponent],
  providers: [CountriesService],
})
export class CountriesModule {}
