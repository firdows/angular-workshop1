import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { IRegisterComponent } from './register.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {
  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private account: AccountService,
    private router: Router

  ) {
    this.initialCreateFormData();

  }

  Url = AppUrl;
  form: FormGroup;

  //ลงทะเบียน
  onSubmit() {
    if (this.form.invalid) {
      this.alert.someting_wrong();
      console.log(this.form.errors);
    }
    if (this.form.valid) {
      // console.log(this.form.valid);
      //console.log(this.form.value);
      //throw new Error("Method not implemented.");
      this.account
        .onRegister(this.form.value)
        .then(res => {
          this.alert.notify("ลงทะเบียนสำเร็จ",'success');
          this.router.navigate(['/', AppUrl.Login])
        })
        .catch(err => this.alert.notify(err.Message));

    }
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^[A-z0-9]{6,15}$/)]],
      cpassword: ['', [Validators.required, this.comparePassword('password')]],
    });
  }

  //Create validate custom
  private comparePassword(passwordField: string) {
    return function (comfirm_password: AbstractControl) {
      if (!comfirm_password.parent) return;
      const password = comfirm_password.parent.get(passwordField);
      const passwordSubscripe = password.valueChanges.subscribe(() => {
        comfirm_password.updateValueAndValidity();
        passwordSubscripe.unsubscribe();
      });
      if (comfirm_password.value === password.value) {
        return;
      }
      return { compare: true };
    }
  }

}
