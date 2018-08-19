import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Anime } from './anime-inteface';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient ) { }

  getAnimeList() {
    return this.http.get<Array<Anime>>('assets/data/anime.json')
  }

}
