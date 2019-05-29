import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

import { TeamService } from '../team.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})


export class ParentComponent implements OnInit {

  selectedTeam: Team;

  teams : Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  	this.getTeams();
  }

   onSelect(team: Team): void {
    this.selectedTeam = team;
  }


  getTeams(): void {
    this.teamService.getTeams().subscribe(team => {
      this.teams = team
      console.log(this.teams)
    });
  }

}
