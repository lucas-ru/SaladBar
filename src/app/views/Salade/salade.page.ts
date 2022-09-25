import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Salade} from "../../reducers/salade.reducer";
import {Store} from "@ngrx/store";
import {AddIng, ModifySauce} from "../../actions/salade.actions";


@Component({
  selector: 'app-saladeviews',
  templateUrl: './salade.page.html',
  styleUrls: ['./salade.page.scss'],
})
export class SaladePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private store: Store<Salade>) { }


  ngOnInit() {}


  ChangerData(Data: string) {
    this.store.dispatch(new ModifySauce(Data))
  }

  AjouterData(Nom: string, Prix: string) {
    let ing = {
      nom: Nom,
      prix : Prix
    }
    this.store.dispatch(new AddIng(ing))
  }

}
