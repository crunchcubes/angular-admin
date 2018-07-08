import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { TaskComponent } from './modules/task/task.component';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";


const routes: Routes = [
   {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  }
  /*{
    path: 'dashboardx',
    loadChildren: './modules/task/task.module#TaskModule'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}