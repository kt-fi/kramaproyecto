import { Component, OnInit } from '@angular/core';
import { Family } from '../shared/family';

@Component({
  selector: 'app-family-selector',
  templateUrl: './family-selector.component.html',
  styleUrls: ['./family-selector.component.css']
})
export class FamilySelectorComponent implements OnInit {

  families: Family[] = [
    new Family(1, "Family 1"),
    new Family(2, "Family 2"),
    new Family(1, "Family 3"),
    new Family(2, "Family 4"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
