import { Component, OnInit } from '@angular/core';
import { NcService } from './../../app/services/nc.service';

@Component({
  selector: 'app-nc-list',
  templateUrl: './nc-list.component.html',
  styleUrls: [ './nc-list.component.css' ]
})
export class NcListComponent implements OnInit {

  ncProperties: any[];

  constructor(private ncService: NcService) {}

  ngOnInit() {
    this.ncProperties = this.ncService.ncProperties;
  }
}
