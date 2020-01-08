import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {SoccerplayerService} from '../service/soccerplayer.service';
import {PositionService} from '../service/position.service';
import {CountryService} from '../service/country.service';
import {ClubService} from '../service/club.service';

@Component({
  selector: 'app-soccerplayer-form',
  templateUrl: './soccerplayer-form.component.html',
  styleUrls: ['./soccerplayer-form.component.scss']
})
export class SoccerplayerFormComponent implements OnInit {

  soccerplayerFormGroup;
  countryOptions;
  clubOptions;



  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private soccerplayerService: SoccerplayerService,
              public positionService: PositionService, private countryService: CountryService,
              private clubService: ClubService) {
  }

  ngOnInit() {

    this.countryService.retrieveCountryOptions().subscribe((result) => {
      this.countryOptions = result;
    });

    this.clubService.retrieveClubOptions().subscribe((result) => {
      this.clubOptions = result;
    });

    this.soccerplayerFormGroup = this.fb.group({
      id: [null],
      first_name: [''],
      last_name: ['', [Validators.required, this.badWordValidator()]],
      goals: [null,[Validators.min(0)]],
      injured: [null],
      position: [null],
      birth: [null],
      country: [null],
      clubs: [[]],
      rating: [null],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.soccerplayerService.getSoccerplayer(id).subscribe((response) => {
        this.soccerplayerFormGroup.patchValue(response);
      });
    }

  }


  createSoccerplayer() {
    const soccerplayer = this.soccerplayerFormGroup.value;
    if (soccerplayer.id) {
      this.soccerplayerService.updateSoccerplayer(soccerplayer).subscribe(() => {
        this.router.navigate(['/soccerplayer-list']);
      });
    } else {
      this.soccerplayerService.createSoccerplayer(soccerplayer).subscribe(() => {
        this.router.navigate(['/soccerplayer-list']);
      });
    }
  }


  badWordValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /(Badguy|Who)/.test(control.value);
      return forbidden ? {badWord: {value: control.value}} : null;
    };
  }

}


