import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApplicationService } from 'src/app/services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {


  applicationForm : FormGroup;

  constructor(private form: FormBuilder, private applicationService: ApplicationService, private router: Router) { 
    this.createForm();
  }


  ngOnInit() {
  }


  createForm() {
    this.applicationForm = this.form.group({
      DateCreatedUtc: new FormControl,
      DateModifiedUtc: new FormControl,
      ApplicationStatus: new FormControl,
      CompanyName: new FormControl,
      PositionName: new FormControl,
      JobLink: new FormControl,
      JobLocation: new FormControl,
      Research: new FormControl,
      Contacts: new FormControl,
      SourceOfPosting: new FormControl
    });
  }

  onSubmit() {
    this.applicationService.createStudentApplication(this.applicationForm.value).subscribe(() => {
      this.router.navigate(['student/application/index']);
    });
  }

}
