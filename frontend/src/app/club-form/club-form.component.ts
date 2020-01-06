import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {SoccerplayerService} from '../service/soccerplayer.service';
import {PositionService} from '../service/position.service';
import {CountryService} from '../service/country.service';
import {ClubService} from '../service/club.service';

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.scss']
})
export class ClubFormComponent implements OnInit {

  clubFormGroup;
  countryOptions;
  soccerPlayerOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private soccerplayerService: SoccerplayerService,
              public positionService: PositionService, private countryService: CountryService,
              private clubService: ClubService) { }

  ngOnInit() {

    this.countryService.retrieveCountryOptions().subscribe((result) => {
      this.countryOptions = result;
    });

    this.soccerplayerService.retrieveSoccerplayerOptions().subscribe((result) => {
      this.soccerPlayerOptions = result;
    });

    this.clubFormGroup = this.fb.group({
      id: [null],
      name: [''],
      active: [null],
      goal_difference: [null],
      points: [null],
      founded: [null],
    });


    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clubService.getClub(id).subscribe((response) => {
        this.clubFormGroup.patchValue(response);
      });
    }

  }

  createClub() {
    const club = this.clubFormGroup.value;
    if (club.id) {
      this.clubService.updateClub(club).subscribe(() => {
        this.router.navigate(['/club-list']);
      });
    } else {
      this.clubService.createClub(club).subscribe(() => {
        this.router.navigate(['/club-list']);
      });
    }
  }


}
