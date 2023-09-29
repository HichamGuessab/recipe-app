import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('test', 'description test', 'https://img.freepik.com/photos-premium/1-croissants-isoles-fond-blanc-petit-dejeuner-collations-boulangerie_319982-834.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}