import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {Router} from "@angular/router";

import {ProjectService, TaskService } from '../../../core';

import {
  Project
} from '../../../core';

import {BaseComponent} from '../../../core/base.component';
import { initializeFormElements } from '../../../../assets/external-js/functions';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})

export class TaskNewComponent extends BaseComponent {
  private taskNameControl: FormControl;
  private projects: [Project];

  newTask:any;
  constructor
  (
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router,
  ) 
  { 
    super();
    this.taskNameControl = new FormControl();
  }

  ngOnInit() {
    super.ngOnInit();
    this.setNavigation(
      'New Task',
      [
        {name: 'Task', link: '/task'}, 
        {name: 'New Task', link: '/task-new', type : 'active'}
      ]
    );
   
    this.projectService.getAll()
      .subscribe(projects => {
        this.projects = projects;
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
    this.taskService.add(this.newTask)
    .subscribe(response => {
      console.log(response);
      if(response){
        this.router.navigate(['task']);
      }
    });
  }
}
