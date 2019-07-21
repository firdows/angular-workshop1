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
        if (this.form.invalid) {
            return this.alert.someting_wrong();
        }

        //this.form = this.builder.group
        console.log(this.form.value);
    }

    onConvertImage(input: HTMLInputElement): void {
        const imageControl = this.form.controls['image'];
        const imageType = ['image/jpeg', 'image/png'];

        imageControl.setValue(null);
        if (input.files.length == 0) return;
        // Validate Type
        if (imageType.indexOf(input.files[0].type) < 0) {
            input.value = null;
            return this.alert.notify('กรุณาอัพโหลดรูปภาพเท่านั้น');
        }


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
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            position: ['', Validators.required],
            image: [null],
        });
        this.form.get('email').disable();
    }



}
