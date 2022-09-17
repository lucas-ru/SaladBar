import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodePageRoutingModule } from './qrcode-routing.module';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

import { StoreModule } from '@ngrx/store';
import { saladeReducer } from '../../reducers/salade.reducer';

import { QrCodePage } from './qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodePageRoutingModule,
    NgxScannerQrcodeModule,
    StoreModule.forRoot({ salade: saladeReducer })
  ],
  declarations: [QrCodePage]
})
export class QrCodePageModule {}
