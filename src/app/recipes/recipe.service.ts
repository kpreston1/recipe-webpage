import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://get.pxhere.com/photo/dish-meal-food-produce-' +
      'recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-' +
      'dishes-grilling-fried-food-604134.jpg'
    ),
    new Recipe(
      'The Other Test Recipe',
      'This is simply a test',
      'https://get.pxhere.com/photo/dish-meal-food-produce-' +
      'recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-' +
      'dishes-grilling-fried-food-604134.jpg'
    )
  ];

  getRecipes() {
    // Calling slice on the recipes so that a new array in sent back and not the actual array
    return this.recipes.slice();
  }
}
