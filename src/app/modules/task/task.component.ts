import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import {TaskService, UtilityService } from '../../core';

import {
  Task
} from '../../core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: [Task];
  constructor(
    private taskService: TaskService,
    private util:UtilityService
  ) {}

  ngOnInit() {
    this.taskService.getAll()
      .subscribe(tasks => {
        this.tasks = tasks;
        //this.tags = tags;
        //this.tagsLoaded = true;
        console.log(tasks)
      });
  }

}
