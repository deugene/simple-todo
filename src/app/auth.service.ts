import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

let Auth0Lock = require('auth0-lock').default;

@Injectable()

export class AuthService {
  private lock: any;

  constructor(
    private router: Router
  ) {
    this.lock = new Auth0Lock(
      'RZjzFcs4G6FKnJGLgQD2OBz3VHiDn1DB',
      'deugene.eu.auth0.com'
    );
    this.lock.on('authenticated', (authResult: any): void => {
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('access_token', authResult.accessToken);
      this.getUserProfile()
        .then(() => this.router.navigate([ 'todos' ]));
    });

    this.lock.on('unrecoverable_error', (err: any): void => {
      if (err) { alert(err.message); }
    });
  }

  getUserProfile(): Promise<any> {
    return new Promise((res, rej) => {
      const userProfile = JSON.parse(localStorage.getItem('profile'));
      const accessToken = localStorage.getItem('access_token');
      if (userProfile) {
        res(userProfile);
        return;
      } else if (accessToken) {
        this.lock.getUserInfo(accessToken, (err: any, profile: any): void => {
          if (err) { throw err; }
          localStorage.setItem('profile', JSON.stringify(profile));
          res(profile);
        });
      } else {
        rej(new Error('Profile Not Found'));
      }
    })
    .catch(err => {
      if (err.message !== 'Profile Not Found') { console.error(err); }
    });
  }
  login(): void {
    this.lock.show();
  }
  logout(): void {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');

    this.router.navigate([ 'home' ]);
  }
  loggedIn(): boolean {
    return tokenNotExpired('id_token', localStorage.getItem('id_token'));
  }
}
