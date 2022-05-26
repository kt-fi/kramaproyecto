import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items?: any;
  familyId?: any;

  constructor(public itemsService:ItemsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.familyId = params.get('id');
    });
    this.itemsService.getAllItemsFamily(this.familyId).subscribe(foundItems => this.items = foundItems)
  }

}
