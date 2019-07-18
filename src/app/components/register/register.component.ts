import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Url = AppUrl;

}
