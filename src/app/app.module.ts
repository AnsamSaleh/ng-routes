import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { NestedComponent } from './nested/nested.component';
import { Child1Component } from './nested/child1/child1.component';
import { Child2Component } from './nested/child2/child2.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { AccountComponent } from './account/account.component';

import RoutesModule from './routes.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import {HashLocationStrategy, LocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NestedComponent,
    Child1Component,
    Child2Component,
    PhotoComponent,
    PhotosComponent,
    PhotoDetailsComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
