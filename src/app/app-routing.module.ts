import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AboutComponent } from './about.component';
import { TodosListComponent } from './todos-list.component';

const routes: Routes = [
  { path: 'todos', component: TodosListComponent, canActivate: [ AuthGuard ] },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AUTH_PROVIDERS, AuthGuard ]
})

export class AppRoutingModule { }
