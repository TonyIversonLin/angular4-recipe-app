import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
