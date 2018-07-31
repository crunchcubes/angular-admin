import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UtilityService {
  private title:string;

  constructor () {}

  @Output() onTitleChanged: EventEmitter<any> = new EventEmitter();
  
  setNavigation(title: string, items:any[]) {
    this.title = title;
    this.onTitleChanged.emit({sender: this, value: {title: title, items: items}});
  }
  getTitle(): string{
    return this.title;
  }
}