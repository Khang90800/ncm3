import { Component } from '@angular/core';
import { AdService } from '../../../app/services/ad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: [ './ad-details.component.css' ]
})
export class AdDetailsComponent {

  adId: number = 0;
  adLabel: string = 'ad_label';  

  constructor(private adService: AdService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id']; 
    this.adId = this.adService.getAdById(+id).id;    
    this.adLabel = this.adService.getAdById(+id).label;    
  }
}