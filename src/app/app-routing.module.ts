import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { TodoFormReactiveComponent } from './todo-form-reactive/todo-form-reactive.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent, canActivate: [ AuthGuard ] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: TodoFormReactiveComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AUTH_PROVIDERS,
    AuthGuard,
  ]
})

export class AppRoutingModule { }
