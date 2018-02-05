import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put('https://my-recipt-app.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://my-recipt-app.firebaseio.com/recipes.json')
      .map((res: Response) => {
        const recipes: Recipe[] = res.json();
        recipes.forEach(recipe => {
          if (!recipe.ingredients) {recipe.ingredients = [];}
        });
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
