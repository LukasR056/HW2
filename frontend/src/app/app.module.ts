import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {SoccerplayerListComponent} from './soccerplayer-list/soccerplayer-list.component';
import {SoccerplayerFormComponent} from './soccerplayer-form/soccerplayer-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {DateComponent} from './date/date.component';
import { ClubListComponent } from './club-list/club-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SoccerplayerListComponent,
    SoccerplayerFormComponent,
    DateComponent,
    ClubListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
