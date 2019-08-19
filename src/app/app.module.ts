import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { VoceComponent } from './voce/voce.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { FormsModule } from '@angular/forms';
import { FormRestaurenteComponent } from './form-restaurente/form-restaurente.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    VoceComponent,
    PromocaoComponent,
    RestaurantesComponent,
    CardapioComponent,
    FormRestaurenteComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,  
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
