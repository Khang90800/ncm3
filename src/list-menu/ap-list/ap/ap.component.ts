import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: [ './ap.component.css' ]
})
export class ApComponent {

  @Input() apId: string;
  @Input() apLabel: string;
}
