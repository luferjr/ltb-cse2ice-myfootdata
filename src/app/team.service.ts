import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { Team } from './team'
import { Standing } from './standing'

const httpOptionsA = {
	headers: new HttpHeaders ({
		'X-Auth-Token': 'ADD-YOUR-FOOTBALL-DATA-API-TOKEN'
	})
};

@Injectable()
export class TeamService {

  private teamsUrl = 'assets/api/teams.json'; // URL to web api
  private standingsUrl = 'http://api.football-data.org/v2/competitions/2014/standings' //'assets/api/standing.json'
  
  constructor(private http: HttpClient) {}

  //teams = [new Team(346, "Leicester City", "Foxes", "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png"), new Team(394, "Crystal Palace","Crystal", "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png")];

  getTeams(): Observable<Team[]> {
    //return of(this.teams);
    return this.http.get<Team[]>(this.teamsUrl)
  }

  getStandings(): Observable<Standing[]>{
    return this.http.get<Standing[]>(this.standingsUrl, httpOptionsA)
  }

}
