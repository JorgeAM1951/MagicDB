/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from '../models';
import { CardsService } from '../services/cards.service';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  card?: Card;
  cardName: string | undefined;
  routeSub: Subscription | undefined;
  isFav = false;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private cardsService: CardsService) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.cardName = params.name;
      this.getCardInfo(this.cardName as string);
    });
  }

  getCardInfo(name: string): void {
    this.cardsService.getCardInfo(name).then(res => {
      this.card = res[0];
      console.log(this.card);
    });

  }

  setFav(){
    if(this.isFav){
      this.isFav = false,
      localStorage.removeItem(this.card.name);
    } else {
      this.isFav = true;
      localStorage.setItem(this.card.name, JSON.stringify(this.card));
      console.log(this.card.name);
    }

  }

}
