import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared';
import { TeamRoutingModule } from './team-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamComponent
  ],
  providers: [
  ]
})
export class TeamModule {}
