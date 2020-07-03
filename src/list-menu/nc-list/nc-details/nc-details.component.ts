import { Component } from '@angular/core';
import { NcService } from '../../../app/services/nc.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nc-details',
  templateUrl: './nc-details.component.html',
  styleUrls: [ './nc-details.component.css' ]
})
export class NcDetailsComponent {

  ncId: number = 0;
  ncLabel: string = 'nc_label';  

  constructor(private ncService: NcService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id']; 
    this.ncId = this.ncService.getNcById(+id).id;    
    this.ncLabel = this.ncService.getNcById(+id).label;    
  }
}