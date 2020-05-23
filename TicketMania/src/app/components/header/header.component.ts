import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/authentication/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  isLoginFailed = false;
  isRegisterFailed = false;
  isRegistered = false;
  isAdmin = false;
  isModerator = false;
  isUser = false;
  username: string;
  myLoginForm: FormGroup;
  myRegisterForm: FormGroup;
  errorMessage: '';

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthenticationService,
    private fBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myLoginForm = this.fBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.myRegisterForm = this.fBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      roles: ['user']
    });

    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isModerator = this.roles.includes('ROLE_MODERATOR');
      this.isUser = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  onLogin() {
    console.log(this.myLoginForm.value);

    this.authService.signIn(this.myLoginForm.value).subscribe(
      (data) => {
        this.tokenStorageService.saveToken(data.jwt);
        this.tokenStorageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getUser().roles;

        this.reloadPage();
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  onRegister() {
    console.log(this.myRegisterForm.value)

    this.authService.signUp(this.myRegisterForm.value).subscribe(data => {
      this.isRegisterFailed = false;
      this.isRegistered = true;
      this.reloadPage();
    }, error => {
      this.errorMessage = error.error.message;
      this.isRegisterFailed = true;
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
