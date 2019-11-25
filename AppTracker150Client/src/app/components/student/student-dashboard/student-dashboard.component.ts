import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { StudentProfile } from 'src/app/models/StudentProfile';

@Component({
  selector: 'student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private _studentProfileService: StudentProfileService) { }

  studentProfile: StudentProfile;

  ngOnInit() {
    this._studentProfileService.getProfile().subscribe((_studentProfile: StudentProfile)=>{
      this.studentProfile = _studentProfile;
      console.log(this.studentProfile);
    });
  }

}
