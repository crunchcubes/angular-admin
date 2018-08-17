import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {Router} from "@angular/router";

import {ProjectService, TaskService } from '../../../core';

import {
  Task
} from '../../../core';

import {BaseComponent} from '../../../core/base.component';
import { initializeFormElements } from '../../../../assets/external-js/functions';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html'
})

export class TaskEditComponent extends BaseComponent {
  private taskNameControl: FormControl;
  task: Task = {} as Task;

  newTask:any;

  title:string;
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
      'Edit Task',
      [
        {name: 'Task', link: '/task'}, 
        {name: 'Edit Task', link: '/task-new', type : 'active'}
      ]
    );
    //this.task.taskName = 'Sample Task';
    console.log('XXXXXXXXXX');
    this.taskService.get(1)
    .subscribe(task => {
      
      console.log(task);
    });
  }

  updateTask() {
   
  }
}
