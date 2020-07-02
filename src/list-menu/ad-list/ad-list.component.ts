import { Component, OnInit } from '@angular/core';
import { AdService } from './../../app/services/ad.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: [ './ad-list.component.css' ]
})
export class AdListComponent implements OnInit {

  adProperties: any[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.adProperties = this.adService.adProperties;
  }
}
