import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { CardsEffects } from './effects/cards';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
import { CardService } from './services/card.service';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', component: MainComponent},
  {path: 'about', component: AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CardsEffects]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    CardService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
