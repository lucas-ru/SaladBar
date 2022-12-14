import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { StoreModule } from '@ngrx/store';
import { saladeReducer } from '../../reducers/salade.reducer';

import { AccueilPage } from './accueil.page';
import {SaladModule} from "../../StateElement/salade.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    StoreModule.forRoot({salade: saladeReducer}),
    SaladModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
