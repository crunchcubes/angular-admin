import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../shared';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
  ]
})
export class ProfileModule {}
