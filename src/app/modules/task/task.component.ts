import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import {TaskService } from '../../core';

import {
  Task
} from '../../core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
 // providers: [TaskService]
})
export class TaskComponent implements OnInit {
  tasks: [Task];
  constructor(
    private TaskService: TaskService
  ) {}

  ngOnInit() {
    this.TaskService.getAll()
      .subscribe(tasks => {
        this.tasks = tasks;
        //this.tags = tags;
        //this.tagsLoaded = true;
        console.log(tasks)
      });

  }

}
