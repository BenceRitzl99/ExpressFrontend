import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email=""
  password=""

  constructor(private auth:AuthService){}

  signIn(){
    this.auth.signIn(this.email, this.password)
    this.email=""
    this.password=""
  }

  secretData(){
    this.auth.getSecret()
  }

}
