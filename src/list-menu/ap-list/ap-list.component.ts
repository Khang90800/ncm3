import { Component, OnInit } from '@angular/core';
import { ApService } from './../../app/services/ap.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ap-list',
  templateUrl: './ap-list.component.html',
  styleUrls: [ './ap-list.component.css' ]
})
export class ApListComponent implements OnInit {

  apProperties: any[];
  apSubscription: Subscription;

  constructor(private apService: ApService) {}

  ngOnInit() {
    this.apSubscription = this.apService.apSubject.subscribe(
      (apProperties: any[]) => {
        this.apProperties = apProperties;
      }
    );
    this.apService.emitApSubject();
  }
}
