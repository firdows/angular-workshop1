import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/login.interface';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable()
export class AccountService {


    mockUserItems: IAcount[] = [
        {
            id: 1,
            firstname: 'อาฮาหมัด',
            lastname: 'เจ๊ะดือราแม',
            email: 'admin@mail.com',
            password: '123456',
            position: 'Frontend Developer',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            created: new Date(),
            updated: new Date()
        }
    ];

    onLogin(model: ILogin) {
        return new Promise((resolve, reject) => {
            //resolve(model);
            const userLogin = this.mockUserItems.find(item => item.email == model.email && item.password == model.password);
            if (!userLogin) return reject({ Message: "ชื่อใช้หรือรหัสผ่านไม่ถูกต้อง" });
            resolve(userLogin)
            console.log(userLogin);

            //console.log(model);
        })
    }


    onRegister(model: IRegister) {
        //console.log(model);
        return new Promise((resolve, reject) => {
            //กรณีที่ถูกต้อง
            this.mockUserItems.push(model);
            resolve(model);
            //reject({ Message: 'Error from server' });
        });
    }

}


export interface IAcount {
    id?: any;
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    position?: string;
    image?: string;
    created?: Date;
    updated?: Date;
}

