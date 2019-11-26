import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private form: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.form.group({
      email: new FormControl,
      password: new FormControl,
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }

}
