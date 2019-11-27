import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, CheckboxControlValueAccessor } from '@angular/forms';
import { CohortService } from 'src/app/services/cohort.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cohort-create',
  templateUrl: './cohort-create.component.html',
  styleUrls: ['./cohort-create.component.css']
})
export class CohortCreateComponent implements OnInit {

  cohortForm: FormGroup;

  
  constructor(private form: FormBuilder, private  cohortService: CohortService, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.cohortForm = this.form.group({
      Id: new FormControl,
      Course: new FormControl,
      StartDateUtc: new FormControl,
      FullTime: new FormControl
    })
  }

  onSubmit() {
    
    this.cohortService.createCohort(this.cohortForm.value).subscribe(() => {
      this.router.navigate(['/cohort']); 

    });
    console.log(this.cohortForm.value)
  }

}
