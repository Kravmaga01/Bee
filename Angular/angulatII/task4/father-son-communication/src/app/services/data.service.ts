import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public heroes = [
    {
      nombre: 'batman',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh7CcqstGlNKDgo5KtdEChpaEwSf6gsyx7w&usqp=CAU',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyilEhyA_j-HvuZLJOhmPhXV-kWzwn_X3fA&usqp=CAU',
    },
    {
      nombre: 'gambito',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZjUhjW5LvYhzEEmGEyLZFxxvpJA9ylHgSA&usqp=CAU',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIE1VtGiEsWhLHSxNfY0kBF4Xx2WPmo6SFPw&usqp=CAU',
    },
    {
      nombre: 'spiter-man',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8Ihnsox2lmTg4R7sjTyzB5WKiiiCdfzp8Q&usqp=CAU',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDE6FtLYnldfqX8Zxz_FiSucQ2mh7_fKe6A&usqp=CAU',
    },
  ];

  public heroeNombre: string = 'spiter-man';

  public heroeImagen: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8Ihnsox2lmTg4R7sjTyzB5WKiiiCdfzp8Q&usqp=CAU';

  public heroeIcon: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDE6FtLYnldfqX8Zxz_FiSucQ2mh7_fKe6A&usqp=CAU';

  getNuevoHeroe() {
    let index: number = Math.floor(Math.random() * this.heroes.length);
    this.heroeNombre = this.heroes[index].nombre
      ? this.heroes[index].nombre
      : '';
    this.heroeImagen = this.heroes[index].nombre
      ? this.heroes[index].imagen
      : '';
    this.heroeIcon = this.heroes[index].icon ? this.heroes[index].icon : '';
  }
}
