import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
@Injectable({
    providedIn: 'root'
})


export class AuthService {

    user: User;
    constructor(private router: Router) { }
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }
    signinuser(email: string, password: string) {

        firebase.auth().signInWithEmailAndPassword(email, password)

            .then(
                response => {
                    this.router.navigate(['/dashboard']);
                    /* firebase.auth().currentUser.getIdToken()
                         .then(
                             (token: string) => this.token = token
                         );*/
                }
            )
            .catch(
                error => console.log(error)
            )

    }

    /*   getToken() {
  
         firebase.auth().currentUser.getIdToken()
              .then(
                  (token: string) => this.token = token
  
              );*
      }
  
      isAuthenticated() {
          return this.token != null;
      }*/
    /* constructor(private router: Router, public afAuth: AngularFireAuth) {
         this.afAuth.authState.subscribe(user => {
             if (user) {
                 this.user = user;
                 localStorage.setItem('user', JSON.stringify(this.user));
             } else {
                 localStorage.setItem('user', null);
             }
         })
     }
 
     get isLoggedIn(): boolean {
         const user = JSON.parse(localStorage.getItem('user'));
         return user !== null;
     }*/
}

