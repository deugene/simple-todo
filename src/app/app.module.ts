import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { DialogComponent } from './dialog.component';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { AuthService } from './auth.service';
import { TodoService } from './todo.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DragulaModule,
    SimpleNotificationsModule
  ],
  declarations: [
    AppComponent,
    TodosListComponent,
    AboutComponent,
    HomeComponent,
    DialogComponent
  ],
  providers: [
    TodoService,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
