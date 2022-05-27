import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FamilySelectorComponent } from './family-selector/family-selector.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { FamilyCardComponent } from './family-selector/family-card/family-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ItemCardSmallComponent } from './items/item/item-card-small/item-card-small.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FamilySelectorComponent,
    ItemsComponent,
    ItemComponent,
    FamilyCardComponent,
    ItemCardSmallComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
