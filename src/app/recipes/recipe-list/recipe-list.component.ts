import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('test', 'description test', 'https://img.freepik.com/photos-premium/1-croissants-isoles-fond-blanc-petit-dejeuner-collations-boulangerie_319982-834.jpg')
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

}
