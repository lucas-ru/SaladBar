import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgxScannerQrcodeModule} from "ngx-scanner-qrcode";
import {Salade} from "../../reducers/salade.reducer";
import {Store} from "@ngrx/store";
import {ModifyReduc} from "../../actions/salade.actions";


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrCodePage implements OnInit {
  public output;
  public checkingvalue: boolean;
  constructor(private activatedRoute: ActivatedRoute, private qrcode: NgxScannerQrcodeModule, private store: Store<Salade>) { }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) =>  console.log(fn + ': ' + res));
  }

  public sendQr(){
    let reduc = this.output.replace('%','')
    this.store.dispatch(new ModifyReduc(reduc))
  }

  ngOnInit() {}

}
