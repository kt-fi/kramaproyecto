import { Component, OnInit } from '@angular/core';
import { Family } from '../shared/family';
import { FamilyService } from './family.service';

@Component({
  selector: 'app-family-selector',
  templateUrl: './family-selector.component.html',
  styleUrls: ['./family-selector.component.css']
})
export class FamilySelectorComponent implements OnInit {

  //Data Falso temporal, para ayuda creacion de temnplate

  families: Family[] = [
    new Family(1, "Family 1"),
    new Family(2, "Family 2"),
    new Family(3, "Family 3"),
    new Family(4, "Family 4"),
  ]

  constructor( public familyService: FamilyService) { }

  ngOnInit(): void {
    this.familyService.getFamilies()
  }

}
