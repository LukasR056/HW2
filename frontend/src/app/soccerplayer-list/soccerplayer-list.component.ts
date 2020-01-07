import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SoccerplayerService} from '../service/soccerplayer.service';
import {PositionService} from '../service/position.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-soccerplayer-list',
  templateUrl: './soccerplayer-list.component.html',
  styleUrls: ['./soccerplayer-list.component.scss'],
})

export class SoccerplayerListComponent implements OnInit {

  faCoffee = faCoffee;
  displayedColumns = ['first_name', 'last_name', 'goals', 'injured', 'birth', 'position', 'country_name', 'clubs_name', 'id'];

  soccerplayers: any[];

  constructor(private http: HttpClient, private soccerplayerService: SoccerplayerService, public  positionService: PositionService) {
  }

  ngOnInit() {
    this.soccerplayerService.getSoccerplayers().subscribe((response: any[]) => {
      this.soccerplayers = response;
    });
  }

  deleteSoccerplayer(soccerplayer: any) {
    this.soccerplayerService.deleteSoccerplayer(soccerplayer).subscribe(() => {
      this.ngOnInit();
    });
  }
}
