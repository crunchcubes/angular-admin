import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  static title:string;
  constructor () {UtilityService.title = 'No title'}

  getTitle(): string{
    return UtilityService.title;
  }

  setTitle(title: string):void{
    UtilityService.title = title;
  }
}