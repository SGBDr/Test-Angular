import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { authServices } from '../services/auth.services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  auth : boolean | undefined
  authSubcription : Subscription = new Subscription()

  constructor(private authS : authServices) { }

  ngOnInit(): void {
    this.authSubcription = this.authS.authSubject.subscribe((a : boolean) => {
      this.auth = a
    })
    this.authS.emitAuth()
  }

  ngOnDestroy(): void{
    this.authSubcription.unsubscribe();
  }

  onSignIn(form : NgForm){
    console.log(form.value)
    this.authS.SignIn(form.value.email, form.value.pwd).then()
  }

  OnSignOut(){
    this.authS.signOut()
  }

}
