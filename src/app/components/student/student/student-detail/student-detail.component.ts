import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { StudentProfile } from 'src/app/models/StudentProfile';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public studentProfile: StudentProfile;

}
