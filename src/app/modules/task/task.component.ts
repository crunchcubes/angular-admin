//Reference: https://medium.com/dailyjs/3-ways-to-communicate-between-angular-components-a1e3f3304ecb

import { Component} from '@angular/core';
import 'rxjs/add/operator/map';

import {TaskService} from '../../core';
import {BaseComponent} from '../../core/base.component';
import {
  Task
} from '../../core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent extends BaseComponent {
  tasks: [Task];

  constructor(private taskService: TaskService) {super()}

  ngOnInit() {  
    super.ngOnInit();
    this.setNavigation(
      'My Tasks', 
      [{name: 'Task', link: '/task', type : 'active'}]
    );

    this.taskService.getAll()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.loaded = true;
        console.log(tasks)
      });
  }
}
