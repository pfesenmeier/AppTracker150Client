import { Component, OnInit } from '@angular/core';
import { CohortService } from 'src/app/services/cohort.service';
import { Cohort } from 'src/app/models/Cohort';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cohort-delete',
  templateUrl: './cohort-delete.component.html',
  styleUrls: ['./cohort-delete.component.css']
})
export class CohortDeleteComponent implements OnInit {

  cohort: Cohort;
 
  constructor(private cohortService: CohortService, private ar: ActivatedRoute, private router: Router) { 
    this.ar.paramMap.subscribe(p => {
      this.cohortService.getCohort(p.get('id')).subscribe((singleCohort: Cohort) => {
        this.cohort = singleCohort;
        console.log(this.cohort);
      });

    });
  }

  ngOnInit() {

  }

  onDelete() {
    this.cohortService.deleteCohort(this.cohort.Id).subscribe(() => {
      this.router.navigate(["/cohort"]);
    });
  }

}
