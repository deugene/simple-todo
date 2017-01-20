import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

let Auth0Lock = require('auth0-lock').default;

@Injectable()

export class AuthService {
  private idToken: string;
  private accessToken: string;
  private lock: any;

  constructor(
    private router: Router
  ) {
    this.lock = new Auth0Lock(
      'RZjzFcs4G6FKnJGLgQD2OBz3VHiDn1DB',
      'deugene.eu.auth0.com'
    );
    this.lock.on('authenticated', (authResult: any): void => {
      this.idToken = authResult.idToken;
      this.accessToken = authResult.accessToken;
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
    return new Promise(res => {
      const prof = JSON.parse(localStorage.getItem('profile'));
      if (prof) {
        res(prof);
        return;
      } else if (this.accessToken) {
        this.lock.getUserInfo(this.accessToken, (err: any, profile: any): void => {
          if (err) { throw err; }
          localStorage.setItem('profile', JSON.stringify(profile));
          res(profile);
        });
      } else {
        res(null);
      }
    })
    .catch(err => console.error(err.message));
  }
  login(): void {
    this.lock.show();
  }
  logout(): void {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');

    this.idToken = null;
    this.accessToken = null;

    this.router.navigate([ 'home' ]);
  }
  loggedIn(): boolean {
    return tokenNotExpired(
      'id_token',
      localStorage.getItem('id_token') || this.idToken
    );
  }
}
