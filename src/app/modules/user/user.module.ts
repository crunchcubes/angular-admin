import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { UserComponent } from './user.component';
import { UserAuthResolver } from './user-auth-resolver.service';
import { SharedModule } from '../../shared';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    //NoAuthGuard
  ]
})
export class UserModule {}
