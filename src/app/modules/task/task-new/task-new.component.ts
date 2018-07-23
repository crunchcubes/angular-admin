import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {ProjectService, TaskService } from '../../../core';

import {
  Project
} from '../../../core';

import { initializeFormElements } from '../../../../assets/external-js/functions';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})

export class TaskNewComponent implements OnInit {
  taskNameControl: FormControl;
  projects: [Project];
  newTask:any;
  constructor
  (
    private projectService: ProjectService,
    private taskService: TaskService
  ) 
  { 
    this.taskNameControl = new FormControl();
  }

  ngOnInit() {
    this.projectService.getAll()
      .subscribe(projects => {
        this.projects = projects;
        //this.tags = tags;
        //this.tagsLoaded = true;
        console.log(projects)
        initializeFormElements();
      });
  }

  addTask() {
    const taskName = this.taskNameControl.value;
    this.newTask = {
      projectId:0,
      taskName:"New Task",
      taskDescription:"Task Description"
    };
    this.taskService.add(this.newTask);
    console.log(this.taskNameControl);
  }
}
