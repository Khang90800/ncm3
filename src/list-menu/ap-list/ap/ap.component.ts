import { Component, Input } from '@angular/core';
import { ApService } from '../../../app/services/ap.service';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: [ './ap.component.css' ]
})
export class ApComponent {

  @Input() apId: string;
  @Input() apLabel: string;

  constructor(private apService: ApService) {}
}
