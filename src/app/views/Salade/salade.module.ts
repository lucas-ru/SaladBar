import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladePageRoutingModule } from './salade-routing.module';

import { StoreModule } from '@ngrx/store';
import { saladeReducer } from '../../reducers/salade.reducer';
import { MySaladeComponent } from '../../models/salade.component';

import { SaladePage } from './salade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladePageRoutingModule,
    StoreModule.forRoot({ salade: saladeReducer })
  ],
  declarations: [SaladePage,MySaladeComponent]
})
export class SaladePageModule {}
