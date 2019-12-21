import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClubService} from '../service/club.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {

  displayedColumns = ['name', 'active', 'goal_difference', 'points', 'founded', 'id'];

  clubs: any[];

  constructor(private http: HttpClient, private clubService: ClubService) {
  }

  ngOnInit() {
    this.clubService.getClubs().subscribe((response: any[]) => {
      this.clubs = response;
    });
  }

  deleteClub(club: any) {
    this.clubService.deleteClub(club).subscribe(() => {
      this.ngOnInit();
    });

  }
}
