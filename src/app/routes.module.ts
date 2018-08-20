import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PhotosComponent} from './photos/photos.component';
import {PhotoComponent} from './photo/photo.component';
import {NestedComponent} from './nested/nested.component';
import {Child1Component} from './nested/child1/child1.component';
import {Child2Component} from './nested/child2/child2.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'photos', component: PhotosComponent },
  { path: 'photo/:id', component: PhotoComponent },
  {
    path: 'nested',
    component: NestedComponent,
    children: [
      { path: 'child1', component: Child1Component},
      { path: 'child2', component: Child2Component},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'account', component: AccountComponent },
  {path: '**', component: HomeComponent}
];

export default RouterModule.forRoot(routes);
