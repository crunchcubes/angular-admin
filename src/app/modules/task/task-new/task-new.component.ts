import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  taskNameControl: FormControl
  constructor() { 
    this.taskNameControl = new FormControl();
  }

  ngOnInit() {
  }

  addTask() {
    const taskName = this.taskNameControl.value;
    console.log(this.taskNameControl);
    alert(taskName);
  }
}
