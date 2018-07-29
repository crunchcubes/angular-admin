import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthComponent } from './modules/auth/auth.component';
import { TaskComponent } from './modules/task/task.component';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { TaskNewComponent } from './modules/task/task-new/task-new.component';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /*{
    path: 'auth',
    component: AuthComponent
  },*/
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
  },
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