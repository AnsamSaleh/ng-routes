import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Signup} from '../models/signup';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  model: Signup = new Signup('', '', '');
  @ViewChild('f') form: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(
      values => {
        console.log('values, ', values)
      }
    );
  }
  onSubmit() {
    if(this.form.valid) {
     // console.log('values ', this.form.value);
      this.authService.signInWithEmailAndPassword(this.model.email, this.model.password);
      this.form.reset();

    } else {
      console.log('Invalid Form ');
    }
  }
  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['account'])
      })
      .catch((err) => console.log(err));
  }

}
