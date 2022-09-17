import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MySaladeComponent } from './salade.component';
import { saladeReducer } from '../reducers/salade.reducer';

const routes: Routes = [
  // { path: 'order', component: SaladPageComponent }
];

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('salade', saladeReducer)],
  exports: [
    MySaladeComponent
  ],
  declarations: [MySaladeComponent]
})
export class SaladModule {}
