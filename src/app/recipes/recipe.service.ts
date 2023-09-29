import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingedient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Croissant',
      'Un petit croissant.',
      'https://img.freepik.com/photos-premium/1-croissants-isoles-fond-blanc-petit-dejeuner-collations-boulangerie_319982-834.jpg',
      [
        new Ingredient('Beurre', 7),
        new Ingredient('Encore du beurre', 4)
      ])
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
