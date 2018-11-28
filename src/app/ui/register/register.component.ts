import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../../service/rest.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, public rest: RestService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobileNumber: ['', [Validators.minLength(10)]],
            frequency: [''],
            orgName: ['', Validators.required],
            designation: ['', Validators.required],
            officeNumber: ['', [Validators.required, Validators.minLength(10)]],
            address1: ['', Validators.required],
            address2: [''],
            landmark: [''],
            pin: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.registerUser();
    }

    registerUser() {
      this.rest.addUser(this.registerForm.value).subscribe((result) => {
        alert(result.displayMessage);
      }, (err) => {
        console.log(err);
      });
      // alert(JSON.stringify(this.registerForm.value));
    }

}
