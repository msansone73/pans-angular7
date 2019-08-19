import { Component, OnInit, Input } from '@angular/core';
import Restaurante from '../restaurante.model';
import { RestaurenteService } from '../restaurente.service';

@Component({
  selector: 'app-form-restaurente',
  templateUrl: './form-restaurente.component.html',
  styleUrls: ['./form-restaurente.component.css']
})
export class FormRestaurenteComponent implements OnInit {

  @Input()
  restaurante:Restaurante

  restauranteService:RestaurenteService

  constructor(private _restauranteService:RestaurenteService) {
    this.restauranteService=_restauranteService
   }

  ngOnInit() {
  }

  onSalvar(){

    //chama rest api

    this.restaurante.nome=""
    this.restaurante.endereco=""
  }

}
