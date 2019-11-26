import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl,
      userRoles: new FormControl
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(()=>{
      this.router.navigate(['admin/index']);
    });
  }

}
