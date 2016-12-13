import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

declare let Auth0Lock: any;

@Injectable()

export class AuthService {
  private idToken: any;
  private lock: any;

  constructor(
    private router: Router,
    private http: Http
  ) {
    this.auth0Config();
  }

  auth0Config(): void {
    this.http.get('api/config')
      .toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) throw new Error(result.err);
        this.lock = new Auth0Lock(result.clientId, result.domain);
        this.lock.on('authenticated', (authResult: any) => {
          this.idToken = authResult.idToken;
          localStorage.setItem('id_token', authResult.idToken);
          this.getUserProfile().then(() => this.router.navigate([ '' ]));
        });
      })
      .catch(() => console.error('auth0 config error'));
  }
  getUserProfile(): Promise<any> {
    return new Promise(res => {
      let profile = JSON.parse(localStorage.getItem('profile'));
      if (profile) {
        res(profile);
        return;
      }
      this.lock.getProfile(this.idToken, (err: any, profile: any) => {
        if (err) throw new Error(err.message);
        localStorage.setItem('profile', JSON.stringify(profile));
        res(profile);
      });
    });
  }
  login(): void {
    this.lock.show();
  }
  logout(): void {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.idToken = null;

    this.router.navigate([ 'home' ]);
  }
  loggedIn(): boolean {
    return tokenNotExpired(
      'id_token',
      localStorage.getItem('id_token') || this.idToken
    );
  }
}
