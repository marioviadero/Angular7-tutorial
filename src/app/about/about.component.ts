import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  formAddContact: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
      this.formAddContact = this.formBuilder.group({
      nombre: ['', Validators.required],
      foto: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.formAddContact.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {
  }

}
