import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  selectedItem: any;

  items = [
    {id: 1, description: 'description 1', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price: 2.30},
    {id: 2, description: 'description 2', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price: 5.5},
    {id: 3, description: 'description 3', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price:9.99}
  ]

  constructor() { }

  getAllItemsFamily(){
    return this.items;
  }

  getAnItem(findId:number){
    this.selectedItem = this.items.filter(item => item.id === findId)
  }
}
