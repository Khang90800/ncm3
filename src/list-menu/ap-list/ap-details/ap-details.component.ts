import { Component } from '@angular/core';
import { ApService } from '../../../app/services/ap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ap-details',
  templateUrl: './ap-details.component.html',
  styleUrls: [ './ap-details.component.css' ]
})
export class ApDetailsComponent {

  apId: number = 0;
  apLabel: string = 'ap_label';  

  constructor(private apService: ApService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id']; 
    this.apId = this.apService.getApById(+id).id;    
    this.apLabel = this.apService.getApById(+id).label;    
  }
}
