import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladePageRoutingModule } from './salade-routing.module';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

import { StoreModule } from '@ngrx/store';
import { saladeReducer } from '../../reducers/salade.reducer';

import { SaladePage } from './salade.page';
import { SaladModule } from "../../StateElement/salade.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladePageRoutingModule,
    NgxScannerQrcodeModule,
    StoreModule.forRoot({ salade: saladeReducer }),
    SaladModule
  ],
  declarations: [SaladePage]
})
export class SaladePageModule { }
