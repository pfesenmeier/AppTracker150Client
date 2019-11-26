import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CohortService } from 'src/app/services/cohort.service';
import { Cohort } from 'src/app/models/Cohort';

@Component({
  selector: 'app-cohort-detail',
  templateUrl: './cohort-detail.component.html',
  styleUrls: ['./cohort-detail.component.css']
})
export class CohortDetailComponent implements OnInit {


  cohort: Cohort;

  constructor(private activatedRoute: ActivatedRoute, private cohortService: CohortService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.cohortService.getCohort(routeData.get('id')).subscribe((cohort: Cohort) => {
        this.cohort = cohort;
      })
      console.log(routeData);
    });
  }

}
