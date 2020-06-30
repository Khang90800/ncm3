import { Component, OnInit } from '@angular/core';
import { NcService } from '../../../app/services/nc.service';

@Component({
  selector: 'app-nc',
  templateUrl: './nc.component.html',
  styleUrls: [ './nc.component.css' ]
})

export class NcComponent implements OnInit {

  ncProperties: any[];

  constructor(private ncService: NcService) {}

  ngOnInit() {
    this.ncProperties = this.ncService.ncProperties;
  }
}
