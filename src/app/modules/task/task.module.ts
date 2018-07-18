import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskComponent } from './task.component';
import { TaskAuthResolver } from './task-auth-resolver.service';
import { SharedModule } from '../../shared';
import { TaskRoutingModule } from './task-routing.module';
import { CommonModule } from "@angular/common";
import { TaskNewComponent } from './task-new/task-new.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskComponent,
    TaskNewComponent
  ],
  providers: [
    TaskAuthResolver
  ]
})
export class TaskModule {}
