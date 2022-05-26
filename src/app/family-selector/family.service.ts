import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private http:HttpClient) { }

  getFamilies(){
    return this.http.get('https://test.krama.es:8014/family/list').subscribe(data => console.log(data))
  }
}
