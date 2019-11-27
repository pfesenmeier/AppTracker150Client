import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { Router } from '@angular/router';
import { Cohort } from 'src/app/models/cohort';
import { CohortService} from 'src/app/services/cohort.service';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  studentProfileForm: FormGroup;
  cohorts: Cohort[];

  constructor(private form: FormBuilder, private studentProfileService: StudentProfileService, private cohortService: CohortService, private router: Router) {
    this.cohortService.getAllCohort().subscribe((cohorts: Cohort[]) => {
      this.cohorts = cohorts;
      console.log(cohorts);
      
    })
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
    this.studentProfileService.createStudentProfile(this.studentProfileForm.value).subscribe(() => {
     this.router.navigate(['student/index']);
    
    })
  }

}
