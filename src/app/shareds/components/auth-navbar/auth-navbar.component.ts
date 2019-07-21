import { Component, OnInit } from '@angular/core';
import { AuthUrl } from 'src/app/authentication/authentication.url';
import { AppUrl } from 'src/app/app.url';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authen: AuthenService,
    private alert: AlertService
  ) { }

  ngOnInit() {
  }

  AppUrl = AppUrl;
  AuthUrl = AuthUrl;

  onLogout() {
    console.log('::logout::');
    this.authen.clearAuthenticated();
    this.alert.notify('ออกจากระบบสำเร็จ')
    this.router.navigate(['/', AppUrl.Login]);
  }
}
