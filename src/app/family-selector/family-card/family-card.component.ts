import { Component, Input, OnInit } from '@angular/core';
import { Family } from 'src/app/shared/family';

@Component({
  selector: 'app-family-card',
  templateUrl: './family-card.component.html',
  styleUrls: ['./family-card.component.css']
})
export class FamilyCardComponent implements OnInit {

  @Input() family?: Family;

  constructor() { }

  ngOnInit(): void {
  }

  //Seleccionar familia para cargar
  selectFamily(id:number){
    alert(id)
  } 

}

