import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../actions/salade.actions';
import {SaladeState} from "../reducers/salade.reducer";

@Component({
  selector: 'app-salade',
  templateUrl: './salade.component.html',
})
export class MySaladeComponent {
  count$: Observable<number>;
  nom$: Observable<string>;
  prix$: Observable<number>;
  ingredients$: Observable<Array<{ nom: string; prix: number }>>;
  sauce$: Observable<string>;
  reduction$: Observable<number>;

  constructor(private store: Store<SaladeState >) {}

  ngOnInit() {
    this.nom$ = this.store.pipe(select(state => state.nom));
    this.prix$ = this.store.pipe(select(state => state.prix));
    this.ingredients$ = this.store.pipe(select(state => state.ingredients));
    this.sauce$ = this.store.pipe(select(state => state.sauce));
    this.reduction$ = this.store.pipe(select(state => state.reduction));
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
