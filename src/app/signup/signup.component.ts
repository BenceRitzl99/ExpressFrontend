import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email=""
  password=""

  constructor(private auth:AuthService){}

  signUp(){
    this.auth.signUp(this.email, this.password)
  }
}
