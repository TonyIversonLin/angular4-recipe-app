import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() targetRecipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {}

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.targetRecipe.ingredients);
  }
}
