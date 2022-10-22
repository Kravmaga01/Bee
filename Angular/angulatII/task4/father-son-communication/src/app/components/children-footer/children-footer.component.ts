import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-children-footer',
  templateUrl: './children-footer.component.html',
  styleUrls: ['./children-footer.component.scss'],
})
export class ChildrenFooterComponent {
  constructor(public dataService: DataService) {}
  cambiarHeroe(): void {
    this.dataService.heroeNombre = 'alexander';
    this.dataService.heroeImagen = 'Nuevaimagen';
  }

  retornarHeroe() {}
}
