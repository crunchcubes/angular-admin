import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
//import { routing } from "./app.routing"; [::KEEP::] - Example of routing with component only
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TaskModule } from './modules/task/task.module';
import {
  SidebarComponent,
  NotificationComponent,
  MessageComponent,
  ContentHeaderComponent,
  SharedModule
} from './shared'; 

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,
    DashboardComponent,
    ContentHeaderComponent
  ],

  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    TaskModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent
  ]
})
export class AppModule {}