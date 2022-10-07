import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public counter: number = 0;

  public operators(valor: number) {
    if (valor === 1) {
      this.counter++;
    }
    if (valor === -1) {
      this.counter--;
    }
    if (valor === 0) {
      this.counter = 0;
    }
  }
}
