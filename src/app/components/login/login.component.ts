import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  Url = AppUrl;
}
