import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken over rice', 'Chicken over rice', 'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg'),
    new Recipe('Lamp over rice', 'Lamp over rice', 'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  
  constructor() { }
  ngOnInit() {}

  onSelectRecipe(recipeValue: Recipe){
    this.selectedRecipe.emit(recipeValue);
  }
}
