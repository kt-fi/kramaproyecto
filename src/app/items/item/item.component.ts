import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  limitedStock: boolean = false;

  // obtener articulo de api para renderizar
  get selectedItem():Item {
    return this.itemService.selectedItem
  }

  constructor(public itemService:ItemsService) { }

  ngOnInit(): void {
  }
}
