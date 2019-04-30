/*import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) { }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         return this.authService.isAuthenticated();
     }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isLoggedIn;
    }
}*/