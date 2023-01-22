import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CurrencyPipe]
})
export class CardsComponent implements OnInit {

  cards!: Card[];

  constructor(
    private cardDataService : CardDataService,
    ) { }

  ngOnInit(): void {
    this.getDataCard();
  }

  getDataCard(){
    this.cardDataService.getCards().subscribe(data => this.cards = data)
  }

}
