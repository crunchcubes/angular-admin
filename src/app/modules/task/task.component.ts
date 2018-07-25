import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import {BaseComponent, TaskService} from '../../core';

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
    this.util.setTitle("Tasks");
    this.taskService.getAll()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.tagsLoaded = true;
        console.log(tasks)
      });
  }

}
