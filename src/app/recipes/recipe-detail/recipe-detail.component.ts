import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeSelected:Recipe;

  id:number;

  constructor(private recipeService:RecipeService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params) => {
          this.id = + params['id'] ;
          this.recipeSelected = this.recipeService.getRecipe(this.id);
      }
    );

  }

  onAddShoppingList(){
        this.recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients);
  }

}
