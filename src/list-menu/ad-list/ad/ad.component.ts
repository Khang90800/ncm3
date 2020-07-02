import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: [ './ad.component.css' ]
})
export class AdComponent {

  @Input() adId: string;
  @Input() adLabel: string;
}
