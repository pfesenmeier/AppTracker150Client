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
  
  columnNames = ['Id', 'Course', 'StartDateUtc', 'EndDateUtc', 'FullTime', 'buttons'];
  dataSource: MatTableDataSource<Cohort>;
 
  constructor(private cohortService: CohortService, private ar: ActivatedRoute, private router: Router) { 
    this.ar.paramMap.subscribe(p => {
      this.cohortService.getAllCohort(p.get('id')).subscribe((singleCohort: Cohort) => {
        this.cohort = singleCohort;
      });
    });
  }

  ngOnInit() {
    this.cohortService.getAllCohort().subscribe((cohort: Cohort[])=>{
      this.dataSource = new MatTableDataSource<Cohort>(cohort);
      
    });
  }
}
