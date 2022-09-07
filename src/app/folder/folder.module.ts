import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';


import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    NgxScannerQrcodeModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
