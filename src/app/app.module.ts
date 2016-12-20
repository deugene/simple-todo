import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';

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
    SimpleNotificationsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TodosComponent,
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
