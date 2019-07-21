import { Component, OnInit } from '@angular/core';
import { IProfileComponent } from './profile.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/shareds/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AlertService } from 'src/app/shareds/services/alert.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements IProfileComponent {

    constructor(
        private builder: FormBuilder,
        private account: AccountService,
        private authen: AuthenService,
        private alert: AlertService
    ) {
        this.initLoadData();
        this.initialCreateFormData();
    }

    positionItems: any[] = [
        'Frontend Development',
        'Backend Development'
    ];
    form: FormGroup;

    // Save Profile
    onSubmit(): void {
        //this.form = this.builder.group
        console.log(this.form.value);
    }

    onConvertImage(input: HTMLInputElement): void {
        if (input.files.length == 0) return;

        const imageControl = this.form.controls['image'];
        console.log(input);
        const reader = new FileReader();
        reader.readAsDataURL(input.files[0]);//convert to Base64
        //Listen Load Success
        reader.addEventListener('load', () => {
            console.log(reader.result);
            imageControl.setValue(reader.result);
        })
    }

    private initLoadData() {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then(user => {
                this.form.controls['email'].setValue(user.email);
                this.form.controls['firstname'].setValue(user.firstname);
                this.form.controls['lastname'].setValue(user.lastname);
                this.form.controls['position'].setValue(user.position);
                this.form.controls['image'].setValue(user.image);
            })
            .catch(err => this.alert.notify(err.Message));

    }

    private initialCreateFormData() {
        this.form = this.builder.group({
            email: [''],
            firstname: [''],
            lastname: [''],
            position: [''],
            image: [''],
        });
        this.form.get('email').disable();
    }



}
