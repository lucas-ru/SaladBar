import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public output;
  public isAccueil = false;
  public isQrCode = false;
  public isSalade = false;
  public isPanier = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    switch(this.folder){
      case 'QrCode':
        this.isQrCode = true;
        break;
      case 'Accueil':
        this.isAccueil = true;
        break;
    }
  }
}
