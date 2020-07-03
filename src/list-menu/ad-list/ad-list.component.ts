import { Component, OnInit } from '@angular/core';
import { AdService } from './../../app/services/ad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: [ './ad-list.component.css' ]
})
export class AdListComponent implements OnInit {

  adProperties: any[];
  adSubscription: Subscription;

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.adSubscription = this.adService.adSubject.subscribe(
      (adProperties: any[]) => {
        this.adProperties = adProperties;
      }
    );
    this.adService.emitAdSubject();
  }
}
