import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: 'Accueil', icon: 'home' },
    { title: 'Ma salade', url: 'Salade', icon: 'fast-food' },
    { title: 'Scanner mon QRCode', url: 'QrCode', icon: 'qr-code' },
    { title: 'Panier', url: 'Panier', icon: 'cart' },
  ];
  constructor() {}
}
