import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simple test', 'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg'),
    new Recipe('A test Recipe', 'This is a simple test', 'http://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg')
  ];
  
  constructor() { }

  ngOnInit() {}

}
