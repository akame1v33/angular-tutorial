import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    Your name is {{name}}
    <button (click)="emit()" >Emit data to parent</button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('name') name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {  
    console.log( "" )
  }

  emit(){
    console.log('emitting');
    this.childEvent.emit("FUCK YEA");
  }

}
