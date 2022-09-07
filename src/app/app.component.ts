import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/folder/Accueil', icon: 'home' },
    { title: 'Ma salade', url: '/folder/Salade', icon: 'fast-food' },
    { title: 'Scanner mon QRCode', url: '/folder/QrCode', icon: 'qr-code' },
    { title: 'Panier', url: '/folder/Panier', icon: 'cart' },
  ];
  constructor() {}
}
