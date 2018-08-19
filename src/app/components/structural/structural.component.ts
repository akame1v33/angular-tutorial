import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  template: `
    <h1>Structural Directives</h1>

    <div *ngIf="showGreet; then thenBlock else elseBlock" ></div>
  
    <ng-template #thenBlock> 
      <h2>THEN BLOCK BABY</h2>
    </ng-template>

    <ng-template #elseBlock> 
    <h2>ELSE BLOCK BABY</h2>
    </ng-template>

    <div *ngFor = "let name of names; index as i">
      <h2>{{i}} {{name}}</h2>
    </div>
  
    <div *ngFor = "let name of names; first as f">
      <h2>{{f}} {{name}}</h2>
    </div>
   
    <div *ngFor = "let name of names; last as l">
    <h2>{{l}} {{name}}</h2>
  
    <div *ngFor = "let name of names; even as e">
    <h2>{{e}} {{name}}</h2>

    <div *ngFor = "let name of names; odd as o">
    <h2>{{o}} {{name}}</h2>
  
  </div>

  `,
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  private names = [
    "Gai",
    "Kevin",
    "Aiz"
  ];

  showGreet = true;
  constructor() { }

  ngOnInit() {
  }

}
