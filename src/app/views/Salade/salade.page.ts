import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-saladeviews',
  templateUrl: './salade.page.html',
  styleUrls: ['./salade.page.scss'],
})
export class SaladePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {}
}
