import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/login.interface';

@Injectable()
export class AccountService {


    private mockUserItems: IAcount[] = [
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
        },
        {
            id: 2,
            firstname: 'aaa',
            lastname: 'aaa',
            email: 'aaa@aaa.aaa',
            password: 'aaaaaa',
            position: 'Frontend Developer',
            //image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            created: new Date(),
            updated: new Date()
        }
    ];

    getUserLogin(accessToken: string) {
        return new Promise<IAcount>((resolve, reject) => {
            const userLogin = this.mockUserItems.find(m => m.id == accessToken);
            if(!userLogin)return reject({Message:'Access Token ไม่ถูกต้อง'});
            return resolve(userLogin);
        });
    }

    onLogin(model: ILogin) {
        return new Promise<{ accessToken: string }>((resolve, reject) => {
            //resolve(model);
            const userLogin = this.mockUserItems.find(item => item.email == model.email && item.password == model.password);
            if (!userLogin) return reject({ Message: "ชื่อใช้หรือรหัสผ่านไม่ถูกต้อง" });
            resolve({
                accessToken: userLogin.id
            })
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

