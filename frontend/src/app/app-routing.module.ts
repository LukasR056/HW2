import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SoccerplayerListComponent} from './soccerplayer-list/soccerplayer-list.component';
import {SoccerplayerFormComponent} from './soccerplayer-form/soccerplayer-form.component';
import {ClubListComponent} from './club-list/club-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'soccerplayer-list', pathMatch: 'full'},
  {path: 'soccerplayer-list', component: SoccerplayerListComponent},
  {path: 'soccerplayer-form', component: SoccerplayerFormComponent},
  {path: 'soccerplayer-form/:id', component: SoccerplayerFormComponent},
  {path: 'club-list', component: ClubListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
