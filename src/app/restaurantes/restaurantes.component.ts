import { Component, OnInit } from '@angular/core';
import Restaurante from '../restaurante.model'



@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = []
  restaurante: Restaurante =new Restaurante()
  showForm: boolean=false

  constructor() {
   }

  ngOnInit() {
    this.restaurantes=  [
      { "id": 0, "nome": "pizza hut matozinho" , "endereco": "rua Matozino" },
      { "id": 1, "nome": "pizza hut boa vista" , "endereco": "rua boa vista"},
      { "id": 2, "nome": "pizza hut arraida"   , "endereco": "rua arrabida"}
  ];

  this.restaurante.nome="jose"
  this.restaurante.endereco="rua"
  
  this.showForm =false
  }

  onEdit(r:Restaurante){
    this.showForm=true
    //this.restaurante=r
    let rest:Restaurante = new Restaurante()
    rest.nome=r.nome
    rest.endereco=r.endereco
    this.restaurante=rest

  }

}
