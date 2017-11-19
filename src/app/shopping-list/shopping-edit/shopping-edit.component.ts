import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  ingredient: Ingredient = {name:'', amount:0};
  constructor() {}
  ngOnInit() {}

  onAdd(){
    console.log('shooting out')
    this.newIngredient.emit(this.ingredient);
  }
}
