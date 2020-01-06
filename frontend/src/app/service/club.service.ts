import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) {
  }

  retrieveClubOptions() {
    return this.http.get<any[]>('api/club/list');
  }

  getClubs() {
    return this.http.get('api/club/list');
  }

  deleteClub(club: any) {
    return this.http.delete('api/club/' + club.id + '/delete');
  }

  createClub(value: any) {
    return this.http.post('/api/club/create', value);
  }

  updateClub(club: any) {
    return this.http.put('/api/club/' + club.id + '/update', club);
  }


  getClub(id: string) {
    return this.http.get('/api/club/' + id + '/get');
  }
}
