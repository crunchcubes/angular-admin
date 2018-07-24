import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
//import { routing } from "./app.routing"; [::KEEP::] - Example of routing with component only
import { AppRoutingModule } from './app-routing.module';
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TaskModule } from './modules/task/task.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
//import { UtilityService } from './core/services/utility.service'
import {
  SidebarComponent,
  NavbarComponent,
  NotificationComponent,
  MessageComponent,
  ContentHeaderComponent,
  SharedModule
} from './shared';

import {UtilityService } from './core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { TaskScheduleComponent } from './task-schedule/task-schedule.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,
    ContentHeaderComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    TaskModule,
    DashboardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UtilityService],
  bootstrap: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContentHeaderComponent,
    MessageComponent,
    NotificationComponent
  ]
})
export class AppModule {}