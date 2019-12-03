import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminStudentService } from 'src/app/services/admin-student.service';
import { Application } from 'src/app/models/Application';
import { MatTableDataSource, MatSort } from '@angular/material';
import { StudentProfileService } from 'src/app/services/student-profile.service';
import { AdminApplicationView } from 'src/app/models/AdminApplicationView';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminStudentProfile } from 'src/app/models/AdminStudentProfile';

@Component({
  selector: 'app-admin-student-detail',
  templateUrl: './admin-student-detail.component.html',
  styleUrls: ['./admin-student-detail.component.css']
})
export class AdminStudentDetailComponent implements OnInit {

  columnNames: string[] = ['PositionName', 'CompanyName', 'ApplicationStatus', 'DateCreatedUtc']
  dataSource: MatTableDataSource<AdminApplicationView>; 

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;
  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  profile: AdminStudentProfile;

  constructor(private adminstudentService: AdminStudentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      console.log(routeData)
      this.adminstudentService.getStudentProfile(routeData.get('id')).subscribe((student: AdminStudentProfile) => {
        console.log(student);
        this.dataSource = new MatTableDataSource<AdminApplicationView>(student.Applications);
        this.profile = student;
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    })
    
  }

}
