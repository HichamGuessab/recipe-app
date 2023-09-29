import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingedient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnInit(): void {
  }

  addIngredient(name: string, amount: string) {
    this.shoppingListService.addIngredient(new Ingredient(name, +amount))
  }
}
