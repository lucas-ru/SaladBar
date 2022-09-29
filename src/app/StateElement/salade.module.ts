import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MySaladeComponent } from './salade.component';
import { saladeReducer } from '../reducers/salade.reducer';
import { EffectsModule } from '@ngrx/effects';
//import { SaladeEffect } from '../StateElement/salade.effect';

const routes: Routes = [
  { path: '/', component: MySaladeComponent }
];

@NgModule({
  imports: [CommonModule,
    //EffectsModule.forFeature([SaladeEffect]),
    StoreModule.forFeature('salade', saladeReducer)],
  exports: [
    MySaladeComponent
  ],
  declarations: [MySaladeComponent]
})
export class SaladModule { }
