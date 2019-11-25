import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/Application';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student-application.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.css']
})
export class ApplicationEditComponent implements OnInit {

  application: Application;
  editForm: FormGroup;
  applicationService: any;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private       activatedRoute: ActivatedRoute, private router: Router) {this.activatedRoute.paramMap.subscribe(params => {
         this.applicationService.getApplication(params.get('id')).subscribe((application: Application) =>{
       this.application = application;
    this.createForm();
  });
 });
}
  ngOnInit() {
  }
  
  createForm() {
    this.editForm = this.formBuilder.group({
      Id: new FormControl(this.application.Id),
      DateCreatedUtc: new FormControl(this.application.DateCreatedUtc),
      DateModifiedUtc: new FormControl(this.application.DateModifiedUtc),
      ApplicationStatus: new FormControl(this.application.ApplicationStatus),
      CompanyName: new FormControl(this.application.CompanyName),
      PositionName: new FormControl(this.application.PositionName),
      JobLink: new FormControl(this.application.JobLink),
      JobLocation: new FormControl(this.application.JobLocation),
      Research: new FormControl(this.application.Research),
      Contact: new FormControl(this.application.Contacts),
      SourceOfPosting: new FormControl(this.application.SourceOfPosting)
    });
  }

  onSubmit() {
    const updatedApplication: Application ={
      Id: this.editForm.value.Id,
      DateCreatedUtc: this.editForm.value.DateCreatedUtc,
      DateModifiedUtc: this.editForm.value.DateCreatedUtc,
      ApplicationStatus: this.editForm.value.ApplicationStatus,
      CompanyName: this.editForm.value.CompanyName,
      PositionName: this.editForm.value.PositionName,
      JobLink: this.editForm.value.JobLink,
      JobLocation: this.editForm.value.JobLocation,
      Research: this.editForm.value.Research,
      Contacts: this.editForm.value.Contacts,
      SourceOfPosting: this.editForm.value.SourceOfPosting,

    };
    this.applicationService.updateApplication(updatedApplication).subscribe(() =>{
      this.router.navigate(['/']);
    });
  }

}
