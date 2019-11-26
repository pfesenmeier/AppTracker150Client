import { Component, OnInit } from '@angular/core';
import { CohortService } from 'src/app/services/cohort.service';
import { Cohort } from 'src/app/models/Cohort';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cohort-index',
  templateUrl: './cohort-index.component.html',
  styleUrls: ['./cohort-index.component.css']
})
export class CohortIndexComponent implements OnInit {

  columnNames = ['Id', 'Course', 'StartDateUtc', 'EndDateUtc', 'FullTime', 'buttons'];
  dataSource: MatTableDataSource<Cohort>;
 
  constructor(private cohortService: CohortService) { }

  ngOnInit() {
    this.cohortService.getAllCohort().subscribe((cohort: Cohort[])=>{
      this.dataSource = new MatTableDataSource<Cohort>(cohort);
      
    });
  }
}
