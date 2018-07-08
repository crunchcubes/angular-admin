import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
//import { TaskAuthResolver } from './task-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    /*resolve: {
      isAuthenticated: TaskAuthResolver
    }*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
