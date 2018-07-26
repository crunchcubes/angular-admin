import { Component, HostBinding, OnInit } from '@angular/core';
import {DependencyResolverService} from '../../core';


@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnInit {
  //@HostBinding('title')
  title:string;
  constructor() { }

  ngOnInit() {
    this.title = 'App Title';
    
    DependencyResolverService.getUtilityService().change.subscribe(title => {
      this.title = title;
    });
  }

}
