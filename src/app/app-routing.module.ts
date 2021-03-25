import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectDeleteComponent } from './delete/subject-delete/subject-delete.component';
import { SubjectEditComponent } from './edit/subject-edit/subject-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subject-edit/:id',
    component: SubjectEditComponent
  },
  {
    path: 'subject-delete/:id',
    component: SubjectDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }