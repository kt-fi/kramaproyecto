import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilySelectorComponent } from './family-selector/family-selector.component';
import { ItemsComponent } from './items/items.component';


const appRoutes: Routes = [
  {path: "", component: FamilySelectorComponent, pathMatch: 'full'},
  {path: "home", component: FamilySelectorComponent},
  {path: "items", component: ItemsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}