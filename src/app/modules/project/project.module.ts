import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { ProjectComponent } from './project.component';
import { SharedModule } from '../../shared';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent
  ],
  providers: [
    //NoAuthGuard
  ]
})
export class ProjectModule {}
