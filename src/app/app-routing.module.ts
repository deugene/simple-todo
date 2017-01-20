import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AuthGuard } from './auth-guard.service';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

const routes: Routes = [
  { path: 'todos', component: TodosComponent, canActivate: [ AuthGuard ] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthGuard
  ]
})

export class AppRoutingModule { }
