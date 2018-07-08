import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {TagsService } from '../../core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
 // providers: [TagsService]
})
export class TaskComponent implements OnInit {

  constructor(
    private tagsService: TagsService
  ) {}

  ngOnInit() {
   // this.tagsService.getAll()
   //   .subscribe(tags => {
        //this.tags = tags;
        //this.tagsLoaded = true;
   //     console.log(tags)
   //   });

  }

}
