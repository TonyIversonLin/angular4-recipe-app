import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken over rice',
      'Chicken over rice',
      'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Lamp over rice',
      'Lamp over rice',
      'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg',
      [
        new Ingredient('egg', 6),
        new Ingredient('berry', 30)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();   // only return copy
  }

  getSelectedRecipe(id: number) {
    return this.recipes.slice()[id];
  }


}
