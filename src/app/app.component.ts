import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cards$: Observable<Card[]>;

  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.getCardsList();
  }

  addCard(cardText: string) {
    this.cardService.createCard(new Card(cardText));
  }
}
