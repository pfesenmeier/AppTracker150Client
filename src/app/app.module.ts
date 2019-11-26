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
         MatInputModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CohortIndexComponent } from './components/admin/cohort/cohort-index/cohort-index.component';
import { CohortCreateComponent } from './components/admin/cohort/cohort-create/cohort-create.component';
import { CohortDetailComponent } from './components/admin/cohort/cohort-detail/cohort-detail.component';
import { CohortDeleteComponent } from './components/admin/cohort/cohort-delete/cohort-delete.component';
import { CohortEditComponent } from './components/admin/cohort/cohort-edit/cohort-edit.component';
import { StudentIndexComponent } from './components/student/student/student-index/student-index.component';
import { StudentCreateComponent } from './components/student/student/student-create/student-create.component';
import { StudentViewComponent } from './components/student/student/student-view/student-view.component';
import { StudentDetailComponent } from './components/student/student/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student/student/student-edit/student-edit.component';
import { AppicationCreateComponent } from './components/student/application/appication-create/appication-create.component';
import { AppicationEditComponent } from './components/student/application/appication-edit/appication-edit.component';
import { AppicationDeleteComponent } from './components/student/application/appication-delete/appication-delete.component';
import { AppicationDetailComponent } from './components/student/application/appication-detail/appication-detail.component';
import { AppicationIndexComponent } from './components/student/application/appication-index/appication-index.component';
import { StudentDeleteComponent } from './components/admin/student/student-delete/student-delete.component';
import { ApplicationIndexComponent } from './components/admin/application/application-index/application-index.component';
import { ApplicationDetailComponent } from './components/admin/application/application-detail/application-detail.component';
import { ApplicationStudentIndexComponent } from './components/admin/application/application-student-index/application-student-index.component';
import { ApplicationCreateComponent } from './components/student/application/application-create/application-create.component';
import { ApplicationDeleteComponent } from './components/student/application/application-delete/application-delete.component';
import { ApplicationEditComponent } from './components/student/application/application-edit/application-edit.component';

const routes = [
  {path: 'register', component: RegistrationComponent },
  {path: 'login', component: LoginComponent },
  {
    path: 'cohort', children: [
      { path: '', component: CohortIndexComponent },
      { path: 'create', component: CohortCreateComponent },
      { path: 'detail:id', component: CohortDetailComponent },
      { path: 'edit/:id', component: CohortEditComponent },
      { path: 'delete/:id', component: CohortDeleteComponent },
    ]
  },
  {path: '**', component: RegistrationComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    CohortIndexComponent,
    CohortCreateComponent,
    CohortDetailComponent,
    CohortDeleteComponent,
    CohortEditComponent,
    StudentIndexComponent,
    StudentCreateComponent,
    StudentViewComponent,
    StudentDetailComponent,
    StudentEditComponent,
    AppicationCreateComponent,
    AppicationEditComponent,
    AppicationDeleteComponent,
    AppicationDetailComponent,
    AppicationIndexComponent,
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
