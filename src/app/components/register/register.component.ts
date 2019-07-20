import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { IRegisterComponent } from './register.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {
  constructor(
    private builder: FormBuilder,
    private alert: AlertService

  ) {
    this.initialCreateFormData();

  }

  Url = AppUrl;
  form: FormGroup;

  //ลงทะเบียน
  onSubmit() {
    if (this.form.invalid) {
      this.alert.someting_wrong();
    }
    if (this.form.valid) {
      console.log(this.form.valid);
      console.log(this.form.value);
      //throw new Error("Method not implemented.");
    }
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
    });
  }


}
