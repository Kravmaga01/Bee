import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  //* de esta manera podemos urilizar los paramatros enviados en la ruta con utilizando los queryparams */
  // ngOnInit(): void {
  //   this.activatedRoute.queryParamMap
  //     .pipe(map((paramsMap) => paramsMap.has('region')))
  //     .subscribe(console.log);
  // }

  //* de esta forma podemos interactuar con los router paramns  */
  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(map((e) => e.keys))
      .subscribe(console.log);
  }
}
