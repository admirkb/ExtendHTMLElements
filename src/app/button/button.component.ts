import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button (click)='Hello()'>{{label}}</button>
  `,
  styles: [`
  button {
    border: solid 3px;
    padding: 8px 10px;
    background: #bada55;
    font-size: 20px;
  }
`],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() label = 'default label';
  constructor() { }

  ngOnInit() {
  }

  Hello(){
    alert('Hello()')
  }
  

}


// ng g component button --inline-style --inline-template  Native