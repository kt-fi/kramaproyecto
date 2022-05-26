import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  get selectedItem(){
    return this.itemService.selectedItem[0]
  }

  constructor(public itemService:ItemsService) { }

  ngOnInit(): void {
   
  }

}
