import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student-application.service';
import { Application } from 'src/app/models/Application';


@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {


  application: Application;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.studentService.getApplication(routeData.get('id')).subscribe((application: Application) => {
        this.application = application;
      });
    });

  }

}