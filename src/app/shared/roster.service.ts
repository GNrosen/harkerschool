import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Player} from './player';
import {Inning} from './inning';
import { Position } from './position';
import { Pitching } from './pitching';
/**
 * Created by lilgbebe on 4/23/17.
 */


@Injectable()
export class RosterService {
  public playersList: Player[] = [];
  public activeRosterList: Player[] = [];
  public positionsList: Position[] = [];
  public inningsList: Inning[] = [];
  public pitchers: Pitching[] = [];

  constructor(private http: Http) {
    this.positionsList = this.initPositions();
    this.playersList = this.getPlayerList();
    this.activeRosterList = this.getPlayerList();
    this.inningsList = this.createInnings();
    this.pitchers = this.createPitching();


  }

  public getPitchings(): Pitching[] {
    return this.pitchers;
  }

  public getInnings(): Inning[] {
    return this.inningsList;
  }

  // Todo: To interface future database of choice
  public getPlayerList(): Array<Player> {
    console.log('we are in the getPlayerList');
    let players = new Array<Player>();

    players.push(this.createPlayerOne());
    players.push(this.createPlayerTwo());
    players.push(this.createPlayerThree());
    players.push(this.createPlayerFour());
    players.push(this.createPlayerFive());
    players.push(this.createPlayerSix());
    players.push(this.createPlayerSeven());
    players.push(this.createPlayerEight());
    players.push(this.createPlayerNine());


    return players;
  }

  private createPlayerOne(): Player {
    let pitching = new Pitching(1, 'Yes');
    const inningPitching = new Inning(1, '1');
    let prefpos = this.positionsList[9];
    let noPrefPos = this.positionsList[0];
    const player: Player = new Player('PLAYER ONE', pitching, inningPitching, prefpos, noPrefPos);
    console.log('this is player one ' + player.prefPos);
    return player;
  }

  private createPlayerTwo(): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[1];
    const noPrefPos = this.positionsList[7];
    const player = new Player('PLAYER TWO', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  private createPlayerThree(): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[2];
    const noPrefPos = this.positionsList[6];
    const player = new Player('PLAYER THREE', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  private createPlayerFour(): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[3];
    const noPrefPos = this.positionsList[5];
    const player = new Player('PLAYER FOUR', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  private createPlayerFive(): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[4];
    const noPrefPos = this.positionsList[3];
    const player = new Player('PLAYER FIVE', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  private createPlayerSix(): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[5];
    const noPrefPos = this.positionsList[4];
    const player = new Player('PLAYER SIX', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  private createPlayerSeven(): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[6];
    const noPrefPos = this.positionsList[2];
    const player = new Player('PLAYER SEVEN', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  private createPlayerEight(): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[7];
    const noPrefPos = this.positionsList[1];
    const player = new Player('PLAYER EIGHT', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  private createPlayerNine (): Player {
    let pitching = new Pitching(0, 'No');
    const inningPitching = new Inning(0, '0');
    const prefpos = this.positionsList[8];
    const noPrefPos = this.positionsList[0];
    const player = new Player('PLAYER NINE', pitching, inningPitching, prefpos, noPrefPos);
    return player;
  }

  public getPositionsList(): Position[] {
    return this.positionsList;
  }

  public initPositions(): Array<Position> {
    console.log("hey we are calling the initPosition() method");
    let positionList = new Array<Position>();
    positionList.push(new Position(0, 'Bench', 'BN'));
    positionList.push(new Position(1, 'Pitcher', 'P'));
    positionList.push(new Position(2, 'Catcher', 'C'));
    positionList.push(new Position(3, 'First Base', '1B'));
    positionList.push(new Position(4, 'Second Base', '2B'));
    positionList.push(new Position(5, 'Third Base', '3B'));
    positionList.push(new Position(6, 'Short Stop', 'SS'));
    positionList.push(new Position(7, 'Left Field', 'LF'));
    positionList.push(new Position(8, 'Center Field', 'CF'));
    positionList.push(new Position(9, 'Right Field', 'RF'));
    // Todo Add benched player position

    console.log(positionList);

    return positionList;
  }

  public createInnings(): Array<Inning> {
    let inningsList = new Array<Inning>();
    inningsList.push(new Inning(1, '1'));
    inningsList.push(new Inning(2, '2'));
    inningsList.push(new Inning(3, '3'));
    inningsList.push(new Inning(4, '4'));
    inningsList.push(new Inning(5, '5'));
    inningsList.push(new Inning(6, '6'));

    return inningsList;

  }

  public createPitching(): Array<Pitching> {
    let pitchings = new Array<Pitching>();
    pitchings.push(new Pitching(0, 'No'));
    pitchings.push(new Pitching(1, 'Yes'));
    return pitchings;
  }


}



