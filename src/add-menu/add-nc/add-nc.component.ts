import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NcService } from '../../app/services/nc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-nc',
  templateUrl: './add-nc.component.html',
  styleUrls: [ './add-nc.component.css' ]
})
export class AddNcComponent implements OnInit {

  addNcForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private ncService: NcService,
              private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addNcForm = this.formBuilder.group({
      inputIdAddNcForm: [{value: '', disabled:true}],
      inputLabelAddNcForm: ['', Validators.required]
    })
  }
  onSubmit() {
    this.router.navigate(['/nc-list']);
    const id = this.addNcForm.get('inputIdAddNcForm').value;
    const label = this.addNcForm.get('inputLabelAddNcForm').value;
    this.ncService.addNc(id, label)

  }
}
