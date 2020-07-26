import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeSelected:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onAddShoppingList(){
        this.recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients);
  }

}
