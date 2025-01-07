import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExpressFrontend';
  constructor(private auth:AuthService){}

  // signin(){
  //   this.auth.signIn()
  // }
  // signup(){
  //   this.auth.signUp()
  // }
}
