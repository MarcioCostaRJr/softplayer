import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) {   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['', ''],
      password : ['', '']
    });
  }

  handleLogin() {
    this.authService.authenticationService(this.username, this.password).subscribe(() => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/persons']);
    }, (err) => {
      console.log(err);
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}

