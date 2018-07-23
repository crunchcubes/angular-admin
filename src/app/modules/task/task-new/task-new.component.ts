import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {ProjectService } from '../../../core';

import {
  Task,
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
  constructor(
    private projectService: ProjectService
  ) { 
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
    console.log(this.taskNameControl);
    alert(taskName);
  }
}
