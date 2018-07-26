import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UtilityService {
  private title:string;

  constructor () {}

  @Output() onTitleChanged: EventEmitter<any> = new EventEmitter();
  @Output() onNavigationChange: EventEmitter<any> = new EventEmitter();

  setTitle(title: string) {
    this.title = title;
    this.onTitleChanged.emit({sender: this, value: title});
  }
  getTitle(): string{
    return this.title;
  }

  setBreadCrumb(items: any[]) {
    this.onNavigationChange.emit({sender: this, value: items});
  }
}