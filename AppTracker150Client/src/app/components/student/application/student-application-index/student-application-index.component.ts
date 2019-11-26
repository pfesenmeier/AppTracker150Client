import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { StudentService } from 'src/app/services/student-application.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-student-application-index',
  templateUrl: './student-application-index.component.html',
  styleUrls: ['./student-application-index.component.css']
})
export class StudentApplicationIndexComponent implements OnInit {

  columnNames = ['Buttons', 'DateCreatedUtc', 'ApplicationStatus', 'CompanyName', 'PositionName', 'JobLink', 'JobLocation', 'Research', 'Contacts', 'SourceOfPosting']

  dataSource: MatTableDataSource<Application>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentApplication().subscribe((application: Application[])=>{
      this.dataSource = new MatTableDataSource<Application>(application);
    });
  }

}
