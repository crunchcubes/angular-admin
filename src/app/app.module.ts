import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MessageComponent } from './shared/message/message.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TaskComponent } from './modules/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,
    DashboardComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,

    DashboardComponent,
    TaskComponent
  ]
})
export class AppModule { }
