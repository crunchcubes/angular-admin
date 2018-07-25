import {OnInit } from '@angular/core';
import {UtilityService } from '../core';

export class BaseComponent implements OnInit {   
 
  constructor(protected util:UtilityService) {}

  ngOnInit() {  
    console.log(this.util.getTitle());
  }

}
