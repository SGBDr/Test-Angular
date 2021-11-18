import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Subject } from "rxjs";

@Injectable()
export class authServices{
    auth : boolean = false;
    authSubject : Subject<boolean> = new Subject()
    user : any = {}

    constructor(private route : Router,private httpclient : HttpClient){
    }

    emitAuth(){
        this.authSubject.next(this.auth);
    }

    SignIn(email : string, pwd : string) : Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.httpclient
            .get<any>('https://blog-b2-default-rtdb.europe-west1.firebasedatabase.app/user.json')
            .subscribe(
              (response) => {
                this.user = response
                console.log(response)
                if(this.user['email'] == email && this.user['pwd'] == pwd){
                    this.auth = true
                    resolve(true)
                    this.emitAuth()
                    this.route.navigate(['/books'])
                }
                resolve(false)
              },
              (error) => {
                console.log('Erreur ! : ' + error);
              }
            );
        });
    }

    signOut(){
        this.auth = false;
        this.emitAuth()
    }
}