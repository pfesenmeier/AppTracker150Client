import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//material imports
import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule,
         MatCheckbox,
         MatCheckboxModule,
         MatSelectModule,
         MatPaginatorModule,
         MatSortModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { CohortIndexComponent } from './components/admin/cohort/cohort-index/cohort-index.component';
import { CohortCreateComponent } from './components/admin/cohort/cohort-create/cohort-create.component';
import { CohortDetailComponent } from './components/admin/cohort/cohort-detail/cohort-detail.component';
import { CohortDeleteComponent } from './components/admin/cohort/cohort-delete/cohort-delete.component';
import { CohortEditComponent } from './components/admin/cohort/cohort-edit/cohort-edit.component';

import { StudentCreateComponent } from './components/student/student/student-create/student-create.component';
import { StudentDetailComponent } from './components/student/student/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student/student/student-edit/student-edit.component';
import { StudentDeleteComponent } from './components/admin/student/student-delete/student-delete.component';
import { ApplicationService } from './services/application.service';

import { ApplicationCreateComponent } from './components/student/application/application-create/application-create.component';
import { ApplicationDeleteComponent } from './components/student/application/application-delete/application-delete.component';
import { ApplicationEditComponent } from './components/student/application/application-edit/application-edit.component';
import { StudentProfileService } from './services/student-profile.service';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './components/admin/dashboard/admin-dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ApplicationIndexComponent } from './components/student/application/application-index/application-index.component';
import { ApplicationDetailComponent } from './components/student/application/application-detail/application-detail.component';
import { AdminStudentIndexComponent } from './components/admin/student/admin-student-index/admin-student-index.component';
import { AdminStudentService } from './services/admin-student.service';
import { AdminApplicationIndexComponent } from './components/admin/application/application-index/admin-application-index.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes = [
  {path: 'register', component: RegistrationComponent },
  {path: 'login', component: LoginComponent },
  
  {
    path: 'cohort', children: [
      { path: '', component: CohortIndexComponent },
      { path: 'create', component: CohortCreateComponent },
      { path: 'detail/:id', component: CohortDetailComponent },
      { path: 'edit/:id', component: CohortEditComponent },
      { path: 'delete/:id', component: CohortDeleteComponent },
    ]
  },
  { path: 'index', component: IndexComponent },

  { path: 'student', children: [
     { path: 'index', component: StudentDashboardComponent },
     { path: 'create', component: StudentCreateComponent },
     { path: 'edit/:id', component: StudentEditComponent },
     
     {path: 'application', children:[
       {path: 'index', component: ApplicationIndexComponent},
       {path: 'create', component: ApplicationCreateComponent},
       {path: 'detail/:id', component: ApplicationDetailComponent},
       {path: 'edit/:id', component: ApplicationEditComponent},
       {path: 'delete/:id', component: ApplicationDeleteComponent},
      ]}
  ]},
  { path: 'admin', children: [
    { path: 'index', component: AdminDashboardComponent },
    { path: 'student', component: AdminStudentIndexComponent },
    { path: 'application', component: AdminApplicationIndexComponent }
  ]},
  { path: '**', component: IndexComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    StudentDashboardComponent,
    CohortIndexComponent,
    CohortCreateComponent,
    CohortDetailComponent,
    CohortDeleteComponent,
    CohortEditComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    ApplicationIndexComponent,
    ApplicationCreateComponent,
    ApplicationDeleteComponent,
    ApplicationDetailComponent,
    ApplicationEditComponent,
    AdminDashboardComponent,
    AdminStudentIndexComponent,
    AdminApplicationIndexComponent,
    StudentDashboardComponent,
    IndexComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    AuthService,
    ApplicationService,
    StudentProfileService,
    AdminStudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
