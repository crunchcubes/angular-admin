import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskComponent } from './task.component';
import { TaskAuthResolver } from './task-auth-resolver.service';
import { SharedModule } from '../../shared';
import { TaskRoutingModule } from './task-routing.module';
import { CommonModule } from "@angular/common";
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
//import { NoAuthGuard } from './no-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule,
    /*ReactiveFormsModule,
    FormsModule*/
  ],
  declarations: [
    TaskComponent,
    TaskNewComponent,
    TaskEditComponent
  ],
  providers: [
    //TaskAuthResolver,
    //NoAuthGuard
  ]
})
export class TaskModule {}
