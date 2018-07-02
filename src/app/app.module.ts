import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MessageComponent } from './shared/message/message.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    //AppComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,

    DashboardComponent
  ]
})
export class AppModule { }
