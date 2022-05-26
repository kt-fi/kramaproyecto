import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // Falso data de items
  items = [
    {id: 1, description: 'description 1', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price: 2.30},
    {id: 2, description: 'description 2', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price: 5.5},
    {id: 3, description: 'description 3', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pz0QzVkjFhBPzsy2OtPbfhedmBAmaq-xeg&usqp=CAU', price:9.99}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
