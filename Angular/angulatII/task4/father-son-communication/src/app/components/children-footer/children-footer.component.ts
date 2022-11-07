import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-children-footer',
  templateUrl: './children-footer.component.html',
  styleUrls: ['./children-footer.component.scss'],
})
export class ChildrenFooterComponent implements OnInit {
  constructor(public dataService: DataService) {}
  ngOnInit(): void {}
}
