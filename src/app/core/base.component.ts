import {OnInit } from '@angular/core';
import {UtilityService } from '../core';
import {DependencyResolverService} from '../core';

export class BaseComponent implements OnInit {   
  protected loaded: boolean;
  constructor() {

  }

  setTitle(title:string){
    DependencyResolverService.getUtilityService().setTitle(title);
  }

  getTitle():string{
    return DependencyResolverService.getUtilityService().getTitle();
  }

  ngOnInit() {  
    
  }

}
