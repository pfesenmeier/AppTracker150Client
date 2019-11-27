import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { StudentProfile } from 'src/app/models/StudentProfile';
import { Cohort } from 'src/app/models/cohort';
import { CohortService } from 'src/app/services/cohort.service';

@Component({
  selector: 'student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private _studentProfileService: StudentProfileService, private cohortservice: CohortService) { }

  studentProfile: StudentProfile;
  cohort: Cohort;

  ngOnInit() {
    this._studentProfileService.getProfile().subscribe((_studentProfile: StudentProfile)=>{
      this.studentProfile = _studentProfile;
      console.log(this.studentProfile);
      this.cohortservice.getCohort(this.studentProfile.CohortId).subscribe((_cohort: Cohort) => {
        this.cohort = _cohort;
        console.log(this.cohort);
      });


    });
  }

}
