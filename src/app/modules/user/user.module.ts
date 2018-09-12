import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../../shared';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class UserModule {}
