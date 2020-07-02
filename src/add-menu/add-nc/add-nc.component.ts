import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NcService } from '../../app/services/nc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-nc',
  templateUrl: './add-nc.component.html',
  styleUrls: [ './add-nc.component.css' ]
})
export class AddNcComponent  {

  constructor(private ncService: NcService,
              private router: Router) {}

  onSubmit(form: NgForm) {
    const label = form.value['inputLabelAddNcForm'];
    this.ncService.addNc(label);
    this.router.navigate(['/nc-list']);
  }
}
