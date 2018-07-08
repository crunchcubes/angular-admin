import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
//import { routing } from "./app.routing"; [::KEEP::] - Example of routing with component only
import { AppRoutingModule } from './app-routing.module';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MessageComponent } from './shared/message/message.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import { TaskComponent } from './modules/task/task.component';
import { TaskModule } from './modules/task/task.module';
import {
 // FooterComponent,
 // HeaderComponent,
  SharedModule
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,
    DashboardComponent
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