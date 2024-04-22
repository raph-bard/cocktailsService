import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails = [
    {
      name: "Mojito",
      price: 8.50,
      imgUrl: "https://static.750g.com/images/1200-675/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg"
    },
    {
      name: "Piña Colada",
      price: 9.00,
      imgUrl: "https://www.onceuponachef.com/images/2023/07/pina-coladas.jpg"
    },
    {
      name: "Cosmopolitan",
      price: 10.00,
      imgUrl: "https://assets.bonappetit.com/photos/650df690c94ec4218673b45a/1:1/w_2560%2Cc_limit/20230915-WEB-SEO-0882_update%2520copy.jpg"
    },
  ];

  getCocktails() : Cocktail[] {
    return this.cocktails;
  }
}
