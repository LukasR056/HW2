import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor() {
  }

  positionName = {
    GK: 'Goalkeeper',
    DEF: 'Defender',
    DMF: 'Definsive Midfielder',
    OMF: 'Offensive Midfielder',
    STR: 'Striker'
  };
}
