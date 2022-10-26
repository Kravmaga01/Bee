import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public heroeslist: any = [];
  public inputSeries: number = 0;
  constructor(public readonly dataService: DataService) {}
  ngOnInit(): void {
    this.dataService
      .getHeroes()
      .subscribe((res) => (console.log(res), (this.heroeslist = res)));
  }
}
