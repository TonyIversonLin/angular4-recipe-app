import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken over rice', 'Chicken over rice', 'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg'),
    new Recipe('Lamp over rice', 'Lamp over rice', 'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();   // only return copy
  }
}
