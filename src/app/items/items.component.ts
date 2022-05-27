import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemShort } from '../shared/item-short';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items?: ItemShort[];
  familyId?: any;

  constructor(public itemsService:ItemsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllItems();
  }


  // Call Service para obtener family de articulos desde api para renderizar , utilizando param para family id para seleccionar familia
  private getAllItems() {
    this.route.params.subscribe(params => {
      this.familyId = params['id'];
    });
    this.itemsService.getAllItemsFamily(this.familyId)
    .subscribe((foundItems) => {
      this.items = foundItems
    },
    (err)=> console.log("An error has occured!!"));
  }
}
