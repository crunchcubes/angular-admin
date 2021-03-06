import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared';
import { TeamRoutingModule } from './team-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent } from  './modal-content.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TeamComponent,
    NgbdModalContent,
  ],
  providers: [
    NgbActiveModal, NgbModalConfig, NgbModal
  ],
  entryComponents: [NgbdModalContent]
})
export class TeamModule {}
