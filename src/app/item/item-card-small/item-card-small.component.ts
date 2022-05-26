import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card-small',
  templateUrl: './item-card-small.component.html',
  styleUrls: ['./item-card-small.component.css']
})
export class ItemCardSmallComponent implements OnInit {

  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

  //Seleccionar articulo para cargar
  selectItem(id:number){
    alert(id)
  }

}
