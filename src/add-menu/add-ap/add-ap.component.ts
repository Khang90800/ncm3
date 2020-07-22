import { Component } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApService } from '../../app/services/ap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ap',
  templateUrl: './add-ap.component.html',
  styleUrls: [ './add-ap.component.css' ]
})
export class AddApComponent  {

  addApForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private apService: ApService,
              private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addApForm = this.formBuilder.group({
      inputIdAddApForm: [{value: '', disabled:true}],
      inputLabelAddApForm: ['', Validators.required]
    })
  }
  onSubmit() {
    this.router.navigate(['/ap-list']);
    const id = this.addApForm.get('inputIdAddApForm').value;
    const label = this.addApForm.get('inputLabelAddApForm').value;
    this.apService.addAp(id, label)

  }
}
