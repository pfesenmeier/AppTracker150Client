import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { StudentService } from 'src/app/services/student-application.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-student-application-index',
  templateUrl: './student-application-index.component.html',
  styleUrls: ['./student-application-index.component.css']
})
<<<<<<< HEAD:AppTracker150Client/src/app/components/student/application/application-index/application-index.component.ts
export class ApplicationStudentIndexComponent implements OnInit {
=======
export class StudentApplicationIndexComponent implements OnInit {
>>>>>>> 29a9816c8ee95bc8282cb6ae91d8f2fe19e32cd3:AppTracker150Client/src/app/components/student/application/student-application-index/student-application-index.component.ts

  columnNames = ['Buttons', 'DateCreatedUtc', 'ApplicationStatus', 'CompanyName', 'PositionName', 'JobLink', 'JobLocation', 'Research', 'Contacts', 'SourceOfPosting']

  dataSource: MatTableDataSource<Application>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentApplication().subscribe((application: Application[])=>{
      console.log(application);
      this.dataSource = new MatTableDataSource<Application>(application);
    });
  }

}
