import { Component, HostBinding, OnInit } from '@angular/core';
import {DependencyResolverService} from '../../core';


@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnInit {
  title:string;
  constructor() {
  }

  ngOnInit() {
    DependencyResolverService.getUtilityService().onChange.subscribe(args => {
      this.title = args.value;
    });
  }

}
