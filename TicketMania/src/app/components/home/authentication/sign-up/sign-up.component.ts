import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private fBuilder: FormBuilder
  ) {}

  myForm: any = {};
  isSuccesful = false;
  isSignUpFailed = false;
  errorMessage = '';

  ngOnInit(): void {
    this.myForm = this.fBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      roles: ['mod']
    });
  }

  onSubmit() {
    this.authService.signUp(this.myForm).subscribe(
      (data) => {
        console.log(data);
        this.isSuccesful = true;
        this.isSignUpFailed = false;
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
