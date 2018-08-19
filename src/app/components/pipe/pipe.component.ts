import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `

        <h2>{{date | date:'short'}}</h2>
        <h2>{{date | date:'shortDate'}}</h2>
        <h2>{{date | date:'shortTime'}}</h2>

        <h2>{{6.344 | number:'1.2-3'}}</h2>
        <h2>{{6.344 | number:'3.2-3'}}</h2>
        <h2>{{6.344 | number:'3.1-2'}}</h2>

        <h2>{{0.09 | percent}}</h2>
        <h2>{{0.76 | percent}}</h2>

        <h2>{{6.344 | currency}}</h2>
        <h2>{{6.344 | currency: 'EUR'}}</h2>

        <h2> {{name}} </h2>
        <h2> {{name | lowercase}} </h2>
        <h2> {{name | uppercase}} </h2>
        <h2> {{name | titlecase}} </h2>
        <h2> {{name | slice:0:3}} </h2>

        <h2>{{data | json}}</h2>

        
  `,
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {


  name = "Aiz Wallenstein";

  data = {
    name:"Kevin Fabian",
    age:19
  };


  date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
