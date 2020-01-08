import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
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
import {ClubListComponent} from './club-list/club-list.component';
import {ClubFormComponent} from './club-form/club-form.component';
import {ShareButtonsModule} from '@ngx-share/buttons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCoffee, fas} from '@fortawesome/free-solid-svg-icons';
import {JwtModule} from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    SoccerplayerListComponent,
    SoccerplayerFormComponent,
    DateComponent,
    ClubListComponent,
    ClubFormComponent,
    LoginComponent,
    LogoutComponent,
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
    ShareButtonsModule,
    HttpClientJsonpModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
