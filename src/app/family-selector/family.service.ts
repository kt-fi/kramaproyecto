import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Family } from '../shared/family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private http:HttpClient) { }

// return array de familias de articulos para poner en pantalla principal
  getFamilies(){
   return this.http.get<Family[]>('https://test.krama.es:8014/family/list')
  }
}
