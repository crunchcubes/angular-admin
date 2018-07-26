import { Injectable, Injector } from '@angular/core';
import { UtilityService } from './utility.service';
@Injectable()
export class DependencyResolverService {
  private static injector:Injector  = Injector.create([
    { provide: UtilityService, useClass: UtilityService, deps: [] }
  ])
  constructor() {
    let service = DependencyResolverService.injector.get(UtilityService);
    service.setTitle("Injected Title");
  }
  
  public static getUtilityService():UtilityService {
    return DependencyResolverService.injector.get(UtilityService);
  }
}


//https://codecraft.tv/courses/angular/dependency-injection-and-providers/providers/
//https://codecraft.tv/courses/angular/dependency-injection-and-providers/injectors/
