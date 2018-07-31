import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { NoAuthGuard } from '../../core/index';
import { SharedModule } from '../../shared';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  imports: [
    SharedModule,
    NotFoundRoutingModule
  ],
  declarations: [
    NotFoundComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class NotFoundModule {}
