import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reference-template-variable',
  template: `
    <div id ='testDiv'>
      <h2 #iamh2 >I am h2. button will give me some modification.</h2>
      <button (click)="edit(iamh2)" >Edit H2</button>
    </div>
  `,
  styleUrls: ['./reference-template-variable.component.css']
})
export class ReferenceTemplateVariableComponent implements OnInit {


  @ViewChild('iamh2') h2Element;

  constructor(private ref:ElementRef) {
    
   }

  ngOnInit() {
    //onsole.log(this.ref.nativeElement.querySelector('#testDiv'));
  }

  edit(element){
    console.log(this.h2Element);
    this.h2Element.nativeElement.innerText = "Edited using @ViewChild"
  }
}
