import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model' ;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A Bread Recipe', 'This is Bread recipe', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_1280.jpg'),
    new Recipe('A Shrimp Recipe', 'This is Shrimp recipe', 'https://p0.pikist.com/photos/111/233/shrimp-pasta-food-meal-cuisine-traditional-fresh-basil-delicious.jpg')
  ] ; 

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
        this.recipeWasSelected.emit(recipe);
  }
}
