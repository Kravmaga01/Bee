import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  img = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';
}
