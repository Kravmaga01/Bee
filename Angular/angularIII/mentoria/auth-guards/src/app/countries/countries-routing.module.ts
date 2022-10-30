import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    children: [
      {
        path: 'detail',
        component: CountryDetailComponent,
      },
      {
        path: 'cities',
        loadChildren: () =>
          import('./cities/cities.module').then((m) => m.CitiesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
