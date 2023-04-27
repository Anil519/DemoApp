import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  login:any;
  constructor(private r:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    // this.login=false;
    // if(this.login)
    // {
    //   return true
    // }
    // else{
    //   this.r.navigate(['/login'])
    //   return false
    // }
    return true
  }
  
}
