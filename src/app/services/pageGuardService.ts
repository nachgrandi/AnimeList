
import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './userService';

@Injectable()
export class GuardPageService implements CanActivate {

  constructor(
    private userService: UserService, 
    private router: Router
  ) { }

  canActivate() : Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    let user: any = this.userService.getUserLogged();

    if (!user || user.userRole !== 'admin') {
      this.router.navigate(['unauthorized']);  
      return false;
    }

    return true;
  }
}