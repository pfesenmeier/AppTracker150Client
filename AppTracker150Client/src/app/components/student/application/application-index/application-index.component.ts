import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { StudentService } from 'src/app/services/student-application.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-application-index',
  templateUrl: './application-index.component.html',
  styleUrls: ['./application-index.component.css']
})
export class ApplicationStudentIndexComponent implements OnInit {

  columnNames = ['Id', 'Student Id', 'Date Created', 'Date Modified', 'Application Status', 'Company Name', 'Position Name', 'Job Link', ' Job Location', ' Research', 'Contacts', 'Source Of Posting']

  dataSource: MatTableDataSource<Application>

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentApplication().subscribe((application: Application[])=>{
      this.dataSource = new MatTableDataSource<Application>(application);
    });
  }

}
