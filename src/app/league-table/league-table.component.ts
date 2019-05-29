import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Standing } from '../standing';

import { TeamService } from '../team.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  standings : Standing[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getStandings();
  }

  getStandings(): void {
    this.teamService.getStandings().subscribe(standing => {
      this.standings = standing
      console.log(this.standings)
    });
  }

}
