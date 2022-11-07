import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-childer-header',
  templateUrl: './childer-header.component.html',
})
export class ChilderHeaderComponent implements OnInit {
  constructor(public dataService: DataService) {}
  ngOnInit(): void {
    this.dataService;
  }
}
