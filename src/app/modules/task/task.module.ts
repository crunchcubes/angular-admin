import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskComponent } from './task.component';
import { TaskAuthResolver } from './task-auth-resolver.service';
import { SharedModule } from '../../shared';
import { TaskRoutingModule } from './task-routing.module';
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskComponent
  ],
  providers: [
    TaskAuthResolver
  ]
})
export class TaskModule {}
