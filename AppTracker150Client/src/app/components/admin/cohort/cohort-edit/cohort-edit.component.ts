import { Component, OnInit } from '@angular/core';
import { Cohort } from 'src/app/models/Cohort';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CohortService } from 'src/app/services/cohort.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cohort-edit',
  templateUrl: './cohort-edit.component.html',
  styleUrls: ['./cohort-edit.component.css']
})
export class CohortEditComponent implements OnInit {

  cohort: Cohort;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cohortService: CohortService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.cohortService.getCohort(params.get('id')).subscribe((cohort: Cohort) => {
        this.cohort = cohort;
        this.createForm();
      });
    });
   }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      Id: new FormControl(this.cohort.Id),
      Course: new FormControl(this.cohort.Course),
      StartDateUtc: new FormControl(this.cohort.StartDateUtc),
      EndDateUtc: new FormControl(this.cohort.EndDateUtc),
      FullTime: new FormControl(this.cohort.FullTime)

    });
  }

onSubmit() {
    const UpdatedCohort: Cohort = {
      Id: this.editForm.value.Id,
      Course: this.editForm.value.Course,
      StartDateUtc: this.editForm.value.StartDateUtc,
      EndDateUtc: this.editForm.value.EndDateUtc,
      FullTime: this.editForm.value.FullTime,

    };
    this.cohortService.updateCohort(UpdatedCohort).subscribe(() => {
      this.router.navigate(['/cohort']);
    });

}



}
