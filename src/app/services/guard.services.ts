import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { authServices } from "./auth.services";

@Injectable()
export class authGuard implements CanActivate {

    constructor(private authSer : authServices,private router : Router){}

    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        if(this.authSer.auth)return true;
        else this.router.navigate(['/auth']);
        alert("Vpous n'avez pas acces au reste de l'application si vous n'etes pas authetifié");
        return false;
    }
}