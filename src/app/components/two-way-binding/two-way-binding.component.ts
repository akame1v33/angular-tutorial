import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h1>TWO WAY DATA BINDING</h1>

    <input type = "text" [(ngModel)]="name">
    {{name}}
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  private name = "Kirito";

  constructor() { }

  ngOnInit() {
  }

}
