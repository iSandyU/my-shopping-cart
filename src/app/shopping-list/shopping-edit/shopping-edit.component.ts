import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:true}) nameInput;
  @ViewChild('amountInput', {static:true}) amountInput;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(){
        console.log(this.nameInput.nativeElement.value);
        //.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));  
        this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }

}
