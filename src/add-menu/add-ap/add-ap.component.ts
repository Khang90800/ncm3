import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApService } from '../../app/services/ap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ap',
  templateUrl: './add-ap.component.html',
  styleUrls: [ './add-ap.component.css' ]
})
export class AddApComponent  {

  constructor(private apService: ApService,
              private router: Router) {}

  onSubmit(form: NgForm) {
    const label = form.value['inputLabelAddApForm'];
    this.apService.addAp(label);
    this.router.navigate(['/ap-list']);
  }
}
