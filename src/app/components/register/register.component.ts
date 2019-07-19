import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { IRegisterComponent } from './register.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {
  constructor(
    private builder: FormBuilder
  ) {
    this.initialCreateFormData();

  }

  Url = AppUrl;
  form: FormGroup;

  //ลงทะเบียน
  onSubmit() {
    console.log(this.form.value);
    //throw new Error("Method not implemented.");
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      firstname: [],
      lastname: [],
      email: [],
      password: [],
      cpassword: []
    });
  }

}
