import { Component, Input } from '@angular/core';
import { AdService } from '../../../app/services/ad.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: [ './ad.component.css' ]
})
export class AdComponent {

  @Input() adId: string;
  @Input() adLabel: string;

  constructor(private adService: AdService) {}
}
