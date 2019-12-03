import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/models/Application';
import { AdminStudentService } from 'src/app/services/admin-student.service';

@Component({
  selector: 'app-admin-application-detail',
  templateUrl: './admin-application-detail.component.html',
  styleUrls: ['./admin-application-detail.component.css']
})
export class AdminApplicationDetailComponent implements OnInit {

  application: Application;

  constructor(private activatedRoute: ActivatedRoute, private adminStudentService: AdminStudentService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      console.log(routeData.get('id'));
      console.log(routeData.get('studentid'));
      this.adminStudentService.getApplicationsByStudentId(routeData.get('id'),routeData.get('studentid')).subscribe((application: Application) => {
        this.application = application;
        console.log(application);
      });
    });

  }

}
