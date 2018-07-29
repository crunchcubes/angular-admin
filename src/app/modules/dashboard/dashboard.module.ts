import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardAuthResolver } from './dashboard-auth-resolver.service';
import { SharedModule } from '../../shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from "@angular/common";
//import {TaskScheduleComponent} from './task-schedule.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    //TaskScheduleComponent
  ],
  providers: [
    DashboardAuthResolver
  ]
})
export class DashboardModule {}
