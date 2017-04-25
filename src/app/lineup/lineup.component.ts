import { Component, OnInit } from '@angular/core';
import {Player} from '../shared/player';
import {RosterService} from '../shared/roster.service';
import { Position } from '../shared/position';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {

  public activePlayers: Array<Player>;
  public positionsList: Position[] = [];

  constructor(private router: Router, private rosterservice: RosterService) {
    this.activePlayers = this.getPlayers();
    this.positionsList = rosterservice.getPositionsList();

  }

  ngOnInit() {
  }

  public getPlayers(): Array<Player> {
    console.log('getPlayers() entered');
    let players = new Array<Player>();
    players = this.rosterservice.playersList;
    console.log('players: ' + players);
    return players;
  }

}
