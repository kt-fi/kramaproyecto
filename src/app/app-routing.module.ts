import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilySelectorComponent } from './family-selector/family-selector.component';
import { ItemsComponent } from './items/items.component';


const appRoutes: Routes = [
  {path: "", component: FamilySelectorComponent, pathMatch: 'full'},
  {path: "family", component: FamilySelectorComponent},
  {path: "items/:id", component: ItemsComponent},
  {path: "**", component: FamilySelectorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
