import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoccerplayerService {

  constructor(private http: HttpClient) {
  }

  getSoccerplayers() {
    return this.http.get('/api/soccerplayer/list');
  }

  getSoccerplayer(id: string) {
    return this.http.get('/api/soccerplayer/' + id + '/get');
  }

  createSoccerplayer(value: any) {
    return this.http.post('/api/soccerplayer/create', value);
  }

  updateSoccerplayer(soccerplayer: any) {
    return this.http.put('/api/soccerplayer/' + soccerplayer.id + '/update', soccerplayer);
  }

  deleteSoccerplayer(soccerplayer: any) {
    return this.http.delete('/api/soccerplayer/' + soccerplayer.id + '/delete');
  }
}



