import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SubjectComponent } from './subject/subject.component';
import { SubjectEditComponent } from './edit/subject-edit/subject-edit.component';
import { SubjectDeleteComponent } from './delete/subject-delete/subject-delete.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SubjectComponent,
    SubjectEditComponent,
    SubjectDeleteComponent,
    PostEditComponent,
    PostDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
