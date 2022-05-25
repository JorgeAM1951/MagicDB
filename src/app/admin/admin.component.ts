/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Card } from '../models';
import { CardsService } from '../services/cards.service';
import { FireUserService } from 'app/services/fire-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  colors: Array<string> = [];
  color = '';
  name = '';
  types = '';
  card_image = '';
  stats = '';
  description = '';


    constructor(private cardService: CardsService, private fireUserService: FireUserService) {
    }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.colors = this.color.split('/');
    this.cardService.createCard('453', this.name, this.colors, this.types, this.card_image, this.stats, this.description);


  }

  SignOut(){
    this.fireUserService.SignOut();
  }

}
