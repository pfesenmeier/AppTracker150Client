import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { ApplicationService } from 'src/app/services/application.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-application-index',
  templateUrl: './application-index.component.html',
  styleUrls: ['./application-index.component.css']
})
export class ApplicationIndexComponent implements OnInit {

  columnNames = ['Buttons', 'DateCreatedUtc', 'ApplicationStatus', 'CompanyName', 'PositionName']

  dataSource: MatTableDataSource<Application>;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService.getStudentApplication().subscribe((application: Application[])=>{
      console.log(application);
      this.dataSource = new MatTableDataSource<Application>(application);
    });
  }

}
