import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { Anime } from '../../anime-inteface';

@Component({
  selector: 'app-service',
  template: `
    <ul>
      <li *ngFor="let anime of animeList">{{anime.title | titlecase}}:{{anime.episode}}</li>
    </ul>
  `,
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  private animeList:Array<Anime>;

  constructor(private testService:TestService) { }

  ngOnInit() {
    // console.log
    this.testService.getAnimeList().subscribe( (response) => {
      this.animeList = response;
    }, (error) => {
      console.log(error);
    })
  }


}
