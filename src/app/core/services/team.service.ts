import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Team } from '../models';

@Injectable()
export class TeamService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[Team]> {
    return this.apiService.get('/team/get-all')
      .pipe(map((data: {teams: [Team]}) => data.teams));
  }

  get(teamId): Observable<Team> {
    return this.apiService.get(`/team/${teamId}`)
      .pipe(map((data: {team: Team}) => data.team));
  }

  add(payload): Observable<Team> {
    return this.apiService
    .post(
      '/team/create',
      { team: { body: payload } }
    ).pipe(map(response => response));
  }

  update(payload): Observable<Team> {
    return this.apiService
    .post(
      '/team/update',
      { team: { body: payload } }
    ).pipe(map(response => response));
  }

}
