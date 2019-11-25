import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {


  applicationForm : FormGroup;

  constructor(private form: FormBuilder, private studentService: StudentService, private router: Router) { this.createForm();
  }


  ngOnInit() {
  }


  createForm() {
    this.applicationForm = this.form.group({
      Id: new FormControl,
      DateCreatedUtc: new FormControl,
      DateModifiedUtc: new FormControl,
      ApplicationStatus: new FormControl,
      CompanyName: new FormControl,
      PositionName: new FormControl,
      JobLink: new FormControl,
      JobLocation: new FormControl,
      Research: new FormControl,
      Contacts: new FormControl,
      SourceOfPosting: new FormControl,
    });
  }

  onSubmit() {
    this.studentService.createStudentApplication(this.applicationForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
