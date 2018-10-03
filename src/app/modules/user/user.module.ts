import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { UserComponent } from './user.component';
import { UserAuthResolver } from './user-auth-resolver.service';
import { SharedModule } from '../../shared';
import { UserRoutingModule } from './user-routing.module';

import { DataTableModule } from 'angular-6-datatable';

import {  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule, MatTableModule } from '@angular/material';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatTableModule
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    modules
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    //NoAuthGuard
  ]
})
export class UserModule {}
