import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
//import { TaskAuthResolver } from './task-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    /*resolve: {
      isAuthenticated: TaskAuthResolver
    }*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
