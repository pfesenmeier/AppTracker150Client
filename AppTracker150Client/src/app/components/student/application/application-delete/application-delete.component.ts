import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student-application.service';

@Component({
  selector: 'app-application-delete',
  templateUrl: './application-delete.component.html',
  styleUrls: ['./application-delete.component.css']
})
export class ApplicationDeleteComponent implements OnInit {


  application: Application;

  constructor(private activatedRoute: ActivatedRoute, private StudentService: StudentService,       private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.StudentService.getApplication(params.get('id')).subscribe((application: Application) => {
      this.application = application;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this.StudentService.deleteApplication(this.application.Id).subscribe(() => {
      this.router.navigate(['/']);
   });
  }
}
