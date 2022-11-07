import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToRoot() {
    this.router.navigate(['/']);
  }
}
