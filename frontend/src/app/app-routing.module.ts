import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SoccerplayerListComponent} from './soccerplayer-list/soccerplayer-list.component';
import {SoccerplayerFormComponent} from './soccerplayer-form/soccerplayer-form.component';
import {ClubListComponent} from './club-list/club-list.component';
import {ClubFormComponent} from './club-form/club-form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'soccerplayer-list', pathMatch: 'full'},
  {path: 'soccerplayer-list', component: SoccerplayerListComponent, canActivate: [AuthGuard]},
  {path: 'soccerplayer-form', component: SoccerplayerFormComponent, canActivate: [AuthGuard]},
  {path: 'soccerplayer-form/:id', component: SoccerplayerFormComponent, canActivate: [AuthGuard]},
  {path: 'club-list', component: ClubListComponent, canActivate: [AuthGuard]},
  {path: 'club-form', component: ClubFormComponent, canActivate: [AuthGuard]},
  {path: 'club-form/:id', component: ClubFormComponent, canActivate: [AuthGuard]},
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
