import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:true}) nameInput;
  @ViewChild('amountInput', {static:true}) amountInput;

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
        console.log(this.nameInput.nativeElement.value);
        this.addIngredientEvent.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));  
  }

}
