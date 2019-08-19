import { Component, OnInit } from '@angular/core';
import Restaurante from '../restaurante.model'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = [];

  constructor() { }

  ngOnInit() {
    this.restaurantes=  [
      { "id": 0, "nome": "pizza hut matozinho" , "endereco": "rua Matozino" },
      { "id": 1, "nome": "pizza hut boa vista" , "endereco": "rua boa vista"},
      { "id": 2, "nome": "pizza hut arraida"   , "endereco": "rua arrabida"}
  ];
    
  }

}
