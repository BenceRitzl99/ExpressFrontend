import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit, OnDestroy{
  loggedUser:any=null
  feliratkozas?:Subscription
  constructor(private auth:AuthService){   
  }

  ngOnInit(): void {
    this.feliratkozas=this.auth.getLoggedUser().subscribe(
      (user)=>this.loggedUser=user
    )
  }
  
  ngOnDestroy(): void {
    // if (this.feliratkozas) this.feliratkozas.unsubscribe()    
    this.feliratkozas?.unsubscribe()    
  }

  logout(){
    console.log("Kilép")
    if (this.loggedUser) this.auth.logout()
  }


}
