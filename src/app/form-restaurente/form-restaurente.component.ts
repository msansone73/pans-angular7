import { Component, OnInit, Input } from '@angular/core';
import Restaurante from '../restaurante.model';

@Component({
  selector: 'app-form-restaurente',
  templateUrl: './form-restaurente.component.html',
  styleUrls: ['./form-restaurente.component.css']
})
export class FormRestaurenteComponent implements OnInit {

  @Input()
  restaurante:Restaurante

  constructor() { }

  ngOnInit() {
  }

}
