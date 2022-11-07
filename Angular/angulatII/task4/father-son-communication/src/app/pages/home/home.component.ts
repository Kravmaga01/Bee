import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public nombre: string = 'Nombre Usuario';
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  public cambiarNombre(): void {
    this.nombre = 'edward';
    this.dataService.heroeNombre = this.nombre;
  }

  public hijoCambioNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
    this.dataService.heroeNombre = nuevoNombre;
  }
}
