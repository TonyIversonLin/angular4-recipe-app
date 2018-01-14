import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoping-list.service';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  targetRecipe: Recipe;
  id: number;
  constructor(private shoppingListService: ShoppingListService, 
              private route: ActivatedRoute, 
              private recipeService: RecipeService,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.targetRecipe = this.recipeService.getSelectedRecipe(this.id);
    });
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.targetRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
