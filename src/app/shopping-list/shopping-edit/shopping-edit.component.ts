import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingedient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  addIngredient(name: string, amount: string) {
    this.ingredientAdded.emit(new Ingredient(name, +amount));
  }
}
