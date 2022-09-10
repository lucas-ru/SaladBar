import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

import { StoreModule } from '@ngrx/store';
import { saladeReducer } from '../reducers/salade.reducer';
import { MySaladeComponent } from '../models/salade.component';

import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    NgxScannerQrcodeModule,
    StoreModule.forRoot({ salade: saladeReducer })
  ],
  declarations: [FolderPage,MySaladeComponent]
})
export class FolderPageModule {}
