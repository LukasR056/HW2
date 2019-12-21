import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerplayerListComponent } from './soccerplayer-list.component';

describe('SoccerplayerListComponent', () => {
  let component: SoccerplayerListComponent;
  let fixture: ComponentFixture<SoccerplayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerplayerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerplayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
