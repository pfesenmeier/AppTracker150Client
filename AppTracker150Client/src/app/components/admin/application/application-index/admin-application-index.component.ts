import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminStudentService } from 'src/app/services/admin-student.service';
import { Application } from 'src/app/models/Application';
import { MatTableDataSource, MatSort } from '@angular/material';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { AdminApplicationView } from 'src/app/models/AdminApplicationView';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-application-index',
  templateUrl: './admin-application-index.component.html',
  styleUrls: ['./admin-application-index.component.css']
})
export class AdminApplicationIndexComponent implements OnInit {

  columnNames: string[] = ['PositionName', 'CompanyName', 'StudentName', 'ApplicationStatus', 'DateCreatedUtc']
  dataSource: MatTableDataSource<AdminApplicationView>; 

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;
  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminstudentService: AdminStudentService) { }

  ngOnInit() {
    this.adminstudentService.getApplications().subscribe((applications: AdminApplicationView[]) => {
      console.log(applications);
      this.dataSource = new MatTableDataSource<AdminApplicationView>(applications);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
