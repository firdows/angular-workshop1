import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { ILoginComponent } from './login.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { Router } from '@angular/router';
import { AuthUrl } from 'src/app/authentication/authentication.url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {

  constructor(
    private builder: FormBuilder,
    private notify: AlertService,
    private router: Router
  ) {
    this.initialCreateFormData();
  }

  form: import("@angular/forms").FormGroup;
  Url = AppUrl;

  onSubmit(): void {
    if (this.form.invalid) {
      return this.notify.someting_wrong();
    }
    this.router.navigate(['/', AppUrl.Authen, AuthUrl.Dashboard]);

    console.log(this.form.value);
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
