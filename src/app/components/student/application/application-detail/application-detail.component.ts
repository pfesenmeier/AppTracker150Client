import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { Application } from 'src/app/models/Application';


@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {


  application: Application;

  constructor(private activatedRoute: ActivatedRoute, private applicationService: ApplicationService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.applicationService.getApplication(routeData.get('id')).subscribe((application: Application) => {
        this.application = application;
        console.log(application);
      });
    });

  }

}