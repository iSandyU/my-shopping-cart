import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model' ;

import {ShoppingListService} from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] ;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {

      console.log("**********Called Init************");

      this.ingredients = this.shoppingListService.getIngredients();

      this.shoppingListService.ingredientsChanged.subscribe(
          (ingrendients:Ingredient[]) =>{
              this.ingredients = ingrendients;
          }
      );
  }

}
