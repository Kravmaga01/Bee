import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CountriesService implements OnInit {
  constructor(private httpClien: HttpClient) {}
  private ENDPOINT = 'https://restcountries.com/v3.1/all';
  ngOnInit(): void {}

  getCoutries(): Observable<unknown[]> {
    return this.httpClien.get<unknown[]>(this.ENDPOINT);
  }
}
