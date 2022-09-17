import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPageRoutingModule } from './panier-routing.module';

import { StoreModule } from '@ngrx/store';
import { saladeReducer } from '../../reducers/salade.reducer';

import { PanierPage } from './panier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPageRoutingModule,
    StoreModule.forRoot({ salade: saladeReducer })
  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
