import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared';
import { TeamRoutingModule } from './team-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TeamComponent
  ],
  providers: [
    NgbActiveModal
  ]
})
export class TeamModule {}
