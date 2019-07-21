import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/login.interface';
import { resolve } from 'path';

@Injectable()
export class AccountService {

    onLogin(model: ILogin) {
        return new Promise((resolve, retject) => {
            resolve(model);
        })
    }


    onRegister(model: IRegister) {
        console.log(model);
        return new Promise((resolve, reject) => {
            //กรณีที่ถูกต้อง
            resolve(model);
            //reject({ Message: 'Error from server' });
        });
    }

}

