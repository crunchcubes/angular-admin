import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
//import { NoAuthGuard } from './no-auth-guard.service';
import { AuthGuard } from '../../core';

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
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: TaskNewComponent
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
