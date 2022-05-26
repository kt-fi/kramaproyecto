import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  get items(){
    return this.itemsService.items;
  }

  constructor(public itemsService:ItemsService) { }

  ngOnInit(): void {

  }

}
