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
    return this.http.delete('club/' + club.id + '/delete');
  }
}
