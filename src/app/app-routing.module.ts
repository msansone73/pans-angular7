import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoceComponent } from './voce/voce.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { CardapioComponent } from './cardapio/cardapio.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'voce', component: VoceComponent},
  {path: 'promocoes', component: PromocaoComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'cardapio', component: CardapioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
