import {OnInit } from '@angular/core';
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

  setBreadCrumb(items:any[]){
    let mergeItems = [{name: 'Home', link: '/home', type : ''}].concat(items)
    DependencyResolverService.getUtilityService().setBreadCrumb(mergeItems);
  }

  ngOnInit() {  
    
  }

}
