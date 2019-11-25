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
         MatTableModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { CohortIndexComponent } from './components/admin/cohort/cohort-index/cohort-index.component';
import { CohortCreateComponent } from './components/admin/cohort/cohort-create/cohort-create.component';
import { CohortDetailComponent } from './components/admin/cohort/cohort-detail/cohort-detail.component';
import { CohortDeleteComponent } from './components/admin/cohort/cohort-delete/cohort-delete.component';
import { CohortEditComponent } from './components/admin/cohort/cohort-edit/cohort-edit.component';
import { StudentCreateComponent } from './components/student/student/student-create/student-create.component';
import { StudentDetailComponent } from './components/student/student/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student/student/student-edit/student-edit.component';
import { StudentDeleteComponent } from './components/admin/student/student-delete/student-delete.component';
import { ApplicationIndexComponent } from './components/admin/application/application-index/application-index.component';
import { ApplicationDetailComponent } from './components/admin/application/application-detail/application-detail.component';
import { ApplicationStudentIndexComponent } from './components/admin/application/application-student-index/application-student-index.component';
import { ApplicationCreateComponent } from './components/student/application/application-create/application-create.component';
import { ApplicationDeleteComponent } from './components/student/application/application-delete/application-delete.component';
import { ApplicationEditComponent } from './components/student/application/application-edit/application-edit.component';
import { StudentProfileService } from './services/student-profile.service';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', children: [
     { path: 'index', component: StudentDashboardComponent },
     { path: 'create', component: StudentCreateComponent }
  ]},
  { path: '**', component: RegistrationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
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
    ApplicationDetailComponent,
    ApplicationStudentIndexComponent,
    ApplicationCreateComponent,
    ApplicationDeleteComponent,
    ApplicationEditComponent
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
    MatButtonModule
  ],
  providers: [
    AuthService,
    StudentProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
