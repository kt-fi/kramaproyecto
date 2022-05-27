import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyService } from '../family-selector/family.service';
import { Family } from '../shared/family';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  families: Family[] = []

  constructor(private familyService: FamilyService, private router:Router) { }

  ngOnInit(): void {
    
    this.getFamilies();
  }


  // Call Service para obtener familias de api para renderizar
  private getFamilies() {
    this.familyService.getFamilies().subscribe(
      (data) => {
        console.log(data)
        this.families = data;
      },
      (err) => {
        console.log("An error has occured");
      }
    );
  }

   changePage(id:number){
    this.router.navigate(["/"]).then(()=>{
      this.router.navigate(["/items", id])
    })
  }

}
