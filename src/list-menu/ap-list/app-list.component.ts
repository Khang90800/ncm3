import { Component, OnInit } from '@angular/core';
import { ApService } from './../../app/services/ap.service';

@Component({
  selector: 'app-ap-list',
  templateUrl: './ap-list.component.html',
  styleUrls: [ './ap-list.component.css' ]
})
export class ApListComponent implements OnInit {

  constructor(private apService: ApService) {}

  apProperties: any[];

  ngOnInit() {
    this.apProperties = this.apService.apProperties;
  }

}
