import { Component, OnInit } from '@angular/core';
import { NcService } from './../../app/services/nc.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nc-list',
  templateUrl: './nc-list.component.html',
  styleUrls: [ './nc-list.component.css' ]
})
export class NcListComponent implements OnInit {

  ncProperties: any[];
  ncSubscription: Subscription;

  constructor(private ncService: NcService) {}

  ngOnInit() {
    this.ncSubscription = this.ncService.ncSubject.subscribe(
      (ncProperties: any[]) => {
        this.ncProperties = ncProperties;
      }
    );
    this.ncService.emitNcSubject();
  }
}
