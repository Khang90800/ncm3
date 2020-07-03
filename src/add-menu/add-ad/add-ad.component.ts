import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdService } from '../../app/services/ad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: [ './add-ad.component.css' ]
})
export class AddAdComponent  {

  constructor(private adService: AdService,
              private router: Router) {}

  onSubmit(form: NgForm) {
    const label = form.value['inputLabelAddAdForm'];
    this.adService.addAd(label);
    this.router.navigate(['/ad-list']);
  }
}
