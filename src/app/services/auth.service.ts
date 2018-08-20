import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }
  signInWithEmailAndPassword(email: string, password: string){
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  .then ( user =>{
    console.log('user', email, password);
    this.router.navigate(['/account'])
  }).catch(err =>{
    console.log(err);
    this.router.navigate(['/login'])
  })
  }
  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/home']));
  }

}
