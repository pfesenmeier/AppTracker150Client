import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  studentProfileForm: FormGroup;

  constructor(private form: FormBuilder, private studentProfileService: StudentProfileService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.studentProfileForm = this.form.group({
      StudentId: new FormControl,
      FirstName: new FormControl,
      LastName: new FormControl,
      CohortId: new FormControl,
      ResumeLink: new FormControl,
      LinkedInLink: new FormControl,
      PortfolioLink: new FormControl,
      GitHub: new FormControl
    });
  }

  onSubmit() {
    console.log(this.studentProfileForm.value)
    this.studentProfileService.createStudentProfile(this.studentProfileForm.value).subscribe(()=> {
      this.router.navigate(['/student/index']);
    })
  }

}
