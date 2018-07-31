import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthComponent } from './modules/auth/auth.component';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { TaskComponent } from './modules/task/task.component';
import { TaskNewComponent } from './modules/task/task-new/task-new.component';
import { DefaultComponent } from './modules/default/default.component';

import { DefaultModule } from './modules/default/default.module';
import { AuthModule } from './modules/auth/auth.module';
import { TaskModule } from './modules/task/task.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [
   /*{
    path: '',
    loadChildren: () => AuthModule
  },*/
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'default',
  },
  {
    path: 'default',
    loadChildren: () => DefaultModule,
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  /*{
    path: 'auth',
    loadChildren: () => AuthModule,
  },*/
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  {
    path: 'task',
    loadChildren: () => TaskModule,
  },

  { path: '**', loadChildren: () => DefaultModule, }
  /*{ 
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'task',
    component: TaskComponent,
    //loadChildren: './modules/task/task.module#TaskModule'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  { 
    path: "task/task-new", 
    component: TaskNewComponent 
  },*/
  /*{
    path: 'dashboardx',
    loadChildren: './modules/task/task.module#TaskModule'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}