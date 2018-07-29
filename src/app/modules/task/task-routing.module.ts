import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskAuthResolver } from './task-auth-resolver.service';
import { NoAuthGuard } from './no-auth-guard.service';
/*const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    resolve: {
      isAuthenticated: TaskAuthResolver
    }
  }
];*/
const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    //canActivate: [NoAuthGuard]
  },
  {
    path: 'task-new',
    component: TaskNewComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
