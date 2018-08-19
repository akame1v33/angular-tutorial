import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `

      <h2 [style.fontWeight]="700" >Style Binding</h2>
      <h2 [style.color]="red">Style Binding</h2>  




      <input  [disabled] = "isDisabled" [id]="inputId" type = "text" value = "Disabled shit.">
      <input [disabled] = "isDisabled" type = "text" value = "I am disabled">
      <button (click)="click()">Manipulate inputs.</button>

      <h2 [class.title]="isTitle">Class Binding</h2>
      <h2 class = "text-success">Class Binding</h2>
      <h2 [ngClass]="h2Classes">Class Binding</h2>



     

  `,
  styles: [`
      h1 {
        text-align:center;
      }
      .text-success {
        color:green;
      }
      .text-primary {
        color:blue;
      }
      .text-danger {
        color:red;
      }
      .text-special {
        font-style:italic;
      }
      .title {
        font-weight:700;
        color:orange;
      }
  `]
})
export class DemoComponent implements OnInit {
  private red = "red";
  private hasError = true;
  private isTitle = true;
  private isDisabled = false;
  private inputId = "input_1";
  private guess:any = {
    name:'Kevin Fabian'
  }
  public h2Classes = {
    "text-danger": this.hasError,
    "text-success": !this.hasError,
    "text-special": !this.hasError
  };
  constructor() { }

  ngOnInit() {

  }
  
  onHover(){
    console.log(this.isDisabled);
    
  }
  click(){
    this.isDisabled = !this.isDisabled;
  }
}
