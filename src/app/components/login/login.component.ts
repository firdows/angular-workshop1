import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { ILoginComponent } from './login.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { Router } from '@angular/router';
import { AuthUrl } from 'src/app/authentication/authentication.url';
import { AccountService } from 'src/app/shareds/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {

  constructor(
    private builder: FormBuilder,
    private notify: AlertService,
    private router: Router,
    private account: AccountService,
  ) {
    this.initialCreateFormData();
  }

  form: FormGroup;
  Url = AppUrl;

  onSubmit(): void {
    if (this.form.invalid) {
      return this.notify.someting_wrong();
    }
    // console.log(this.form.value);


    this.account
      .onLogin(this.form.value)
      .then(res => {
        //console.log(res);
        this.router.navigate(['/', AppUrl.Authen, AuthUrl.Dashboard]);
      })
      .catch(err => {
        this.notify.notify(err.Message);
      });

    //throw new Error("Method not implemented.");
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true]
    })
  }



}
