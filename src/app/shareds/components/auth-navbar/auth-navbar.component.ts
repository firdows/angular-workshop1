import { Component, OnInit } from '@angular/core';
import { AuthUrl } from 'src/app/authentication/authentication.url';
import { AppUrl } from 'src/app/app.url';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AppUrl = AppUrl;
  AuthUrl = AuthUrl;
}
