import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient = {name: '', amount: 0};
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {}

  onAdd() {
    this.shoppingListService.addIngredient(this.ingredient);
  }
}
