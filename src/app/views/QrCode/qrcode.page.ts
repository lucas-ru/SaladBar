import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrCodePage implements OnInit {
  public output;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {}
}
