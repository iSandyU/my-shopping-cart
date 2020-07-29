import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model' ;

import {ShoppingListService} from './shopping-list.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[] ;

  private subcription:Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {

      console.log("**********Called Init************");

      this.ingredients = this.shoppingListService.getIngredients();

      this.subcription =  this.shoppingListService.ingredientsChanged.subscribe(
          (ingrendients:Ingredient[]) =>{
              this.ingredients = ingrendients;
          }
      );
  }

  ngOnDestroy():void{
    this.subcription.unsubscribe();
  }

}
