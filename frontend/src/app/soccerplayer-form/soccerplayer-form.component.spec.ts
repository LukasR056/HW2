import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerplayerFormComponent } from './soccerplayer-form.component';

describe('SoccerplayerFormComponent', () => {
  let component: SoccerplayerFormComponent;
  let fixture: ComponentFixture<SoccerplayerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerplayerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerplayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
