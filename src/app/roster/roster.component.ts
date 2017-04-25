import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Player} from '../shared/player';
import {RosterService} from '../shared/roster.service';
import { Position } from '../shared/position';
import {Inning} from '../shared/inning';
import {Pitching} from '../shared/pitching';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  public activePlayers: Array<Player>;
  public positionsList: Position[] = [];
  public inningsList: Inning[] = [];
  public pitchersList: Pitching[] = [];

  constructor(private router: Router, private rosterservice: RosterService) {
    this.activePlayers = this.getPlayers();
    this.positionsList = rosterservice.getPositionsList();
    this.inningsList = rosterservice.getInnings();
    this.pitchersList = rosterservice.getPitchings();

  }

  ngOnInit() {

  }

  public buildLineUp(): void {
    console.log('build lineup entered nav to lineup');
    this.router.navigate(['/lineup']);
  }

  public getPlayers(): Array<Player> {
    console.log('getPlayers() entered');
    let players = new Array<Player>();
    players = this.rosterservice.playersList;
    console.log('players: ' + players);
    return players;
  }


}
