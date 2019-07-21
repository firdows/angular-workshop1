import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/login.interface';
import { IProfile } from 'src/app/authentication/components/profile/profile.interface';

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

    // แก้ไขข้อมูลส่วน
    onUpdateProfile(accessToken: string, model: IProfile) {
        return new Promise((resolve, reject) => {
            const userProfile = this.mockUserItems.find(user => user.id == accessToken);
            if (!userProfile) return reject({ Message: 'ไม่พบผู้ใช้นี้ในระบบ' });
            
            userProfile.firstname = model.firstname;
            userProfile.lastname = model.lastname;
            userProfile.position = model.position;
            userProfile.image = model.image;
            userProfile.updated = new Date();
            resolve(userProfile);
        });
    }


    // ดึงข้อมูลคนที่เข้าใช้ระบบ
    getUserLogin(accessToken: string) {
        return new Promise<IAcount>((resolve, reject) => {
            const userLogin = this.mockUserItems.find(m => m.id == accessToken);
            if (!userLogin) return reject({ Message: 'Access Token ไม่ถูกต้อง' });
            return resolve(userLogin);
        });
    }

    // เข้าสู่ระบบ
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


    // ลงทะเบียน
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

