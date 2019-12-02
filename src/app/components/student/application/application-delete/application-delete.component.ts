import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/Application';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-delete',
  templateUrl: './application-delete.component.html',
  styleUrls: ['./application-delete.component.css']
})
export class ApplicationDeleteComponent implements OnInit {


  application: Application;

  constructor(private activatedRoute: ActivatedRoute, private applicationService: ApplicationService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
    applicationService.getApplication(params.get('id')).subscribe((application: Application) => {
      this.application = application;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
  this.applicationService.deleteApplication(this.application.Id).subscribe(() => {
      this.router.navigate(['/student/application/index/']);
   });
  }
}
