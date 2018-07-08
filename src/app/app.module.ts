import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MessageComponent } from './shared/message/message.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TaskComponent } from './modules/task/task.component';

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
    DashboardComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    routing,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,

    //TaskComponent [::KEEP::] Removeed because routing handle loding of these modules
  ]
})
export class AppModule { }
