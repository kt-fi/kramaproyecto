import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FamilySelectorComponent } from './family-selector/family-selector.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { FamilyCardComponent } from './family-selector/family-card/family-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FamilySelectorComponent,
    ItemsComponent,
    ItemComponent,
    FamilyCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
