import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import * as fromRoot from './reducers';
import * as cards from './actions/cards';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cards$: Observable<Card[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.cards$ = this.store.select(fromRoot.getCards);
  }

  addCard(card) {
    this.store.dispatch(new cards.Add(new Card(card)));
  }

  ngOnInit() {
    this.store.dispatch(new cards.Load());
    this.cards$ = this.store.select(fromRoot.getCards);
  }
}
