import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<div>
                fuck yea
                <button (click)="click()" >Click event</button>
                <button (click)="greet='FUCK UP!' ">Click event</button>

                {{greet}}
            </div>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  public greet = "HEHEHEHEHE KONICHIWA!";
  ngOnInit() {
  }

  click(){
    console.log('get clicked!');
  }



}
