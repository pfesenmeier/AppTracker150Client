import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTab } from '@angular/material';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { StudentProfile } from 'src/app/models/StudentProfile';
import { AdminStudentService } from 'src/app/services/admin-student.service';

@Component({
  selector: 'app-admin-student-index',
  templateUrl: './admin-student-index.component.html',
  styleUrls: ['./admin-student-index.component.css']
})
export class AdminStudentIndexComponent implements OnInit {

  columnNames = ['FirstName', 'LastName', 'UserName'];
  dataSource: MatTableDataSource<StudentProfile>;

  constructor(private adminstudentService: AdminStudentService) { }

  ngOnInit() {
    this.adminstudentService.getStudents().subscribe((students: StudentProfile[]) =>{
        console.log(students);
        this.dataSource = new MatTableDataSource<StudentProfile>(students);
    });
  }

}
