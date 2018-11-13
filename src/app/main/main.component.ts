import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import * as fromRoot from '../reducers';
import * as cards from '../actions/cards';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styles: []
})
export class MainComponent implements OnInit {
  public cards$: Observable<Card[]>;

  addCard(card: Card) {
    this.store.dispatch(new cards.Add(card));
  }

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new cards.Load());
    this.cards$ = this.store.select(fromRoot.getCards);
  }
}
