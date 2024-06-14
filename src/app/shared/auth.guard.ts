import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardService } from '../Services/authguard/authguard.service';
import { Token } from '@angular/compiler';



@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate{
  constructor(private authguardservice:AuthguardService,private router:Router){}
  canActivate(): boolean{
    if(!this.authguardservice.gettoken()){
      this.router.navigateByUrl("/LoginPage");
    }
    return this.authguardservice.gettoken();
  }
}
