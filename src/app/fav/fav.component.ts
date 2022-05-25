/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable one-var */
/* eslint-disable no-var */
import { Component, OnInit, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Card } from '../models';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss'],
})
export class FavComponent implements OnInit {
  public cards: Array<Card> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private cardsService: CardsService) {
   }

  ngOnInit() {
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    console.log(keys);
    while ( i-- ) {
      if(keys[i] === 'user'){
        continue;
      } else{
        this.searchCards(keys[i]);
      }
    }
    console.log(values);
  }

  async searchCards(sort?: string){
    this.cards = [];
    const cardList = await this.cardsService.getAllCards(sort);
    console.log(cardList);
    cardList.forEach(element => this.cards.push(element));
    /*let allCards = await this.cardsService.getAllCards();
    console.log(allCards)*/
}

  @HostListener('click') openCardInfo(name: string): void{
    this.router.navigate(['card-info', name]);
  }

}
