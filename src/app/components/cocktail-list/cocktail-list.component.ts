import { Component, OnInit, inject } from '@angular/core';
import { Cocktail } from '../../models/cocktail';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit {

  cocktails : Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails() : void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
