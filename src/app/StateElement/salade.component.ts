import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StartApp } from '../actions/salade.actions';
import { selectSalade, selectPrix, Salade, selectNom, selectIng, selectSauce, selectReduc } from '../reducers/salade.reducer';

@Component({
  selector: 'app-salade',
  templateUrl: './salade.component.html',
  styleUrls: ['./saladeState.page.scss'],
})
export class MySaladeComponent {
  salade$: Observable<Salade>;
  nom$: Observable<string>;
  prix$: Observable<string>;
  ingredients$: Array<{ nom: string; prix: string }>;
  sauce$: Observable<string>;
  reduction$: Observable<string>;

  constructor(private readonly store: Store<Salade>) {
  }



  ngOnInit() {
    this.nom$ = this.store.pipe(select(selectNom));
    this.prix$ = this.store.pipe(select(selectPrix));
    //this.ingredients$ = this.store.pipe(select(state => state.ingredients));
    this.sauce$ = this.store.pipe(select(selectSauce));
    this.reduction$ = this.store.pipe(select(selectReduc));

    console.log(this.sauce$)

    this.store.select<Salade>(selectSalade).subscribe(
      salade => {
        //this.nom$ = salade.nom;
        //this.prix$ = salade.prix;
        this.ingredients$ = salade.ingredients;
        //this.sauce$ = salade.sauce;
        //this.reduction$ = salade.reduction;
      }
    )
  }
}
