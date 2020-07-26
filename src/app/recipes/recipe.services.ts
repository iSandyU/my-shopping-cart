import {Recipe} from './recipe.model' ;
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.services';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

   private recipes : Recipe[] = [
        new Recipe('A Bread Recipe', 
                    'This is Bread recipe', 
                    'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889913_1280.jpg',
                    [
                        new Ingredient('Meat', 2),
                        new Ingredient('Fruits', 15),
                        new Ingredient('Secret Ingredient', 1.5)
                    ]
            ),
        new Recipe('A Shrimp Recipe', 
                    'This is Shrimp recipe', 
                    'https://p0.pikist.com/photos/111/233/shrimp-pasta-food-meal-cuisine-traditional-fresh-basil-delicious.jpg',
                    [
                        new Ingredient('Spice', 4),
                        new Ingredient('Secret Ingredient', 2.5)
                    ]
        )
    ] ;  

    constructor(private shoppingListService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}