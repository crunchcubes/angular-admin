import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {Router} from "@angular/router";

import {ProjectService, TaskService } from '../../../core';

import {
  Task, Project
} from '../../../core';

import {BaseComponent} from '../../../core/base.component';
import { initializeFormElements } from '../../../../assets/external-js/functions';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html'
})

export class TaskEditComponent extends BaseComponent {
  private taskNameControl: FormControl;
  private projects: [Project];
  task: Task = {} as Task;

  //newTask:any;

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
    
    this.projectService.getAll()
    .subscribe(projects => {
      this.projects = projects;
      //initializeFormElements();
    });
    
    this.taskService.get(1)
    .subscribe(task => { 
      this.task = task;
    });
  }

  private updateTask() {
    //[::KEEP::]// const taskName = this.taskNameControl.value; 

    var newTask:any = {
      taskId: null,
      projectId: this.task.projectId,
      taskName: this.task.taskName,
      taskDescription: this.task.taskDescription
    };

    this.taskService.update(newTask)
    .subscribe(response => {
      if(response){
        this.router.navigate(['task']);
      }
    });

    console.log(newTask);
  }
}
