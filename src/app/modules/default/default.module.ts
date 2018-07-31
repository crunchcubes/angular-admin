import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../../shared';
import { DefaultRoutingModule } from './default-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DefaultRoutingModule
  ],
  declarations: [
    DefaultComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class DefaultModule {}
