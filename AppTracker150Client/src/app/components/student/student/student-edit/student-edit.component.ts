import { Component, OnInit } from '@angular/core';
import { StudentProfile } from 'src/app/models/StudentProfile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  profile: StudentProfile;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private studentProfileService: StudentProfileService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.studentProfileService.getProfile().subscribe((studentProfile: StudentProfile) => {
        this.profile = studentProfile;
        this.createForm();
      })
    })
   }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      StudentId: new FormControl(this.profile.StudentId),
      FirstName: new FormControl(this.profile.FirstName),
      LastName: new FormControl(this.profile.LastName),
      CohortId: new FormControl(this.profile.CohortId),
      ResumeLink: new FormControl(this.profile.ResumeLink),
      LinkedInLink: new FormControl(this.profile.LinkedInLink),
      PortfolioLink: new FormControl(this.profile.PortfolioLink),
      GitHub: new FormControl(this.profile.GitHub)
    })
  }

  onSubmit(){
    const updatedProfile: StudentProfile = {
      StudentId: this.editForm.value.StudentId,
      FirstName: this.editForm.value.FirstName,
      LastName: this.editForm.value.LastName,
      CohortId: this.editForm.value.CohortId,
      ResumeLink: this.editForm.value.ResumeLink,
      LinkedInLink: this.editForm.value.LinkedInLink,
      PortfolioLink: this.editForm.value.PortfolioLink,
      GitHub: this.editForm.value.GitHub
    };
    console.log(updatedProfile.StudentId);
    console.log(updatedProfile.FirstName);
    this.studentProfileService.updateProfile(updatedProfile).subscribe(()=> {
      this.router.navigate(['']);
    })
  }

}
