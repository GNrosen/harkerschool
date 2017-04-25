/**
 * Created by lilgbebe on 4/23/17.
 */
import { Position } from './position';
import { Inning } from './inning';
import { Pitching } from './pitching';

export class Player {

  constructor (  public name: string,
    public pitcher: Pitching,
    public inningPitching: Inning,
    public prefPos: Position,
    public notPrefPos: Position) {

  }

  public setName(name: string) {
    this.name = name;
  }
  public setPitcher(pitch: Pitching) {
    this.pitcher = pitch;
  }
  public setInningPitching(inning: Inning) {
    this.inningPitching = inning;
  }
  public setPrefPos(pos: Position) {
    this.prefPos = pos;
  }
  public setNotPrefPos(pos: Position) {
    this.notPrefPos = pos;
  }

}


