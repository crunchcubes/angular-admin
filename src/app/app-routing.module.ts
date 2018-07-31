import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DefaultModule } from './modules/default/default.module';
import { AuthModule } from './modules/auth/auth.module';
import { TaskModule } from './modules/task/task.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NotFoundModule } from './modules/not-found/not-found.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => DefaultModule,
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  {
    path: 'task',
    loadChildren: () => TaskModule,
  },
  { path: '**', loadChildren: () => NotFoundModule, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules;
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}