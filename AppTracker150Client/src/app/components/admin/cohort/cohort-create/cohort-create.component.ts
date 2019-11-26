import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CohortService } from 'src/app/services/cohort.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cohort-create',
  templateUrl: './cohort-create.component.html',
  styleUrls: ['./cohort-create.component.css']
})
export class CohortCreateComponent implements OnInit {

  cohortForm: FormGroup;
  cohortService: CohortService;
  
  constructor(private form: FormBuilder, private noteService: CohortService, private router: Router) { }

  ngOnInit() {
  }

  createForm() {
    this.cohortForm = this.form.group({
      Id: new FormControl,
      Course: new FormControl
    })
  }

  onSubmit() {
    this.cohortService.createCohort(this.cohortForm.value).subscribe(() => {
      this.router.navigate(['/cohort']); 
    });
  }



}
