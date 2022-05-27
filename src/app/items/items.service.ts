import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { ItemShort } from '../shared/item-short';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  // articulo seleccionado
  selectedItem: Item | any;

  //Data Falso

  // items: any = [
  //   {id: 1, description: 'description 1', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price: 2.30},
  //   {id: 2, description: 'description 2', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price: 5.5},
  //   {id: 3, description: 'description 3', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price:9.99}
  // ]

  constructor(private http:HttpClient) { }

// coger todos los articulos
  getAllItemsFamily(id:number){
    return this.http.get<ItemShort[]>(`https://test.krama.es:8014/item/list/${id}`)
  }

// coger un articulo 
  getAnItem(itemId:number){
    this.http.get<Item>(`https://test.krama.es:8014/item/${itemId}`)
    .subscribe((returnedItem) => {
      this.selectedItem = returnedItem
    }, (err)=> console.log("an error has occured"))
  }
}
