import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  title:string;
  constructor () {}

  getTitle(): string{
    return 'No Title';
  }
}