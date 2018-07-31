import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
//import { routing } from "./app.routing"; [::KEEP::] - Example of routing with component only
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TaskModule } from './modules/task/task.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthModule } from './modules/auth/auth.module';
import {
  SidebarComponent,
  NavbarComponent,
  NotificationComponent,
  MessageComponent,
  UserMenuComponent,
  ContentHeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';

import {UtilityService } from './core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MessageComponent,
    NotificationComponent,
    UserMenuComponent,
    ContentHeaderComponent,
    NavbarComponent,
    UserMenuComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    //AuthModule,
    //TaskModule,
    //DashboardModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UtilityService],
  bootstrap: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContentHeaderComponent,
    MessageComponent,
    NotificationComponent,
    UserMenuComponent
  ]
})
export class AppModule {}