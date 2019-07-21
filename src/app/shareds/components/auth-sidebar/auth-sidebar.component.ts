import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from 'src/app/authentication/authentication.url';
import { IAuthSidebarComponent } from './auth-sidebar.interface';
import { IAcount, AccountService } from '../../services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-sidebar',
    templateUrl: './auth-sidebar.component.html',
    styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements IAuthSidebarComponent {


    constructor(
        private account: AccountService,
        private authen: AuthenService,
        private alert: AlertService,
        private route: Router
    ) {

        this.initialLaodUserLogin();
    }

    ngOnInit() {
    }

    AppUrl = AppUrl;
    AuthUrl = AuthUrl;
    UserLogin: IAcount;

    //Load Data
    private initialLaodUserLogin() {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then(UserLogin => this.UserLogin = UserLogin)
            .catch(err => {
                this.alert.notify(err.Message);
                this.authen.clearAuthenticated();
                this.route.navigate(['/', AppUrl.Login]);
            });
    }

}
