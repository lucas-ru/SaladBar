import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgxScannerQrcodeModule} from "ngx-scanner-qrcode";



@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrCodePage implements OnInit {
  public output;
  constructor(private activatedRoute: ActivatedRoute, private qrcode: NgxScannerQrcodeModule) { }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) =>  console.log(fn + ': ' + res));
  }

  ngOnInit() {}
}
