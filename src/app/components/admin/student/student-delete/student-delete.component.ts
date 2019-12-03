import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/Application';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentProfile } from 'src/app/models/StudentProfile';
import { AdminStudentService } from 'src/app/services/admin-student.service';
import { UserInfo } from 'src/app/models/UserInfo';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {


 user: UserInfo;

  constructor(private activatedRoute: ActivatedRoute, private adminStudentService: AdminStudentService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
    adminStudentService.getUser(params.get('id')).subscribe((user: UserInfo) => {
      this.user = user;
      console.log(user);
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
  this.adminStudentService.deleteStudent(this.user.Id).subscribe(() => {
      this.router.navigate(['/admin/student/']);
   });
  }
}

