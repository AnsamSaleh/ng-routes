import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Signup} from '../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {
  model: Signup = new Signup('', '', '');
  @ViewChild('f') form: any;
  users: Observable<any[]>;
  userList: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {
    this.userList = db.list('user');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
   /*
    this.form.valueChanges.subscribe(
      values => {
        console.log('values, ', values);
      }
    );
    */
  }

  onSubmit() {
    if (this.form.valid) {
     // console.log('values ', this.form.value);
      this.userList.push(this.model);
      this.form.reset();
    } else {
      console.log('Invalid Form ');
    }
  }

}
