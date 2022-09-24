import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { StartApp } from '../actions/salade.actions';
import { selectSalade, Salade } from '../reducers/salade.reducer';

@Component({
  selector: 'app-salade',
  templateUrl: './salade.component.html',
})
export class MySaladeComponent {
  salade$: Observable<Salade>;
  nom$: string;
  prix$: number;
  ingredients$: Array<{ nom: string; prix: number }>;
  sauce$: string;
  reduction$: number;

  constructor(private store: Store<Salade>) {
  }



  ngOnInit() {
    //this.nom$ = this.store.select(selectSalade.toString)
    //this.nom$ = this.store.pipe(select(state => state.nom));
    //this.prix$ = this.store.pipe(select(state => state.prix));
    //this.ingredients$ = this.store.pipe(select(state => state.ingredients));
    //this.sauce$ = this.store.pipe(select(state => state.sauce));
    //this.reduction$ = this.store.pipe(select(state => state.reduction));

    this.store.select<Salade>(selectSalade).subscribe(
      salade => {
        this.nom$ = salade.nom;
        this.prix$ = salade.prix;
        this.ingredients$ = salade.ingredients;
        this.sauce$ = salade.sauce;
        this.reduction$ = salade.reduction;
      }
    )
  }



  /*increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }*/
}
