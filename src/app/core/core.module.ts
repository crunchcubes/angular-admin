import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  AuthGuard,
  NoAuthGuard,
  JwtService,
  TaskService,
  TeamService,
  ProjectService,
  UserService,
  ScriptService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    NoAuthGuard,
    JwtService,
    TaskService,
    TeamService,
    ProjectService,
    UserService,
    ScriptService
  ],
  declarations: []
})
export class CoreModule { }