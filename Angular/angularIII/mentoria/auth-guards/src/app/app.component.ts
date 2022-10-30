import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly router: Router) {}
  title = 'auth-guards';
  goToCountries(): void {
    this.router.navigate(['countries', 5, 'medellín']);
  }
}