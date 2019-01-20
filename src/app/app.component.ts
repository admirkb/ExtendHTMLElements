import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';

  constructor(){

    // const xxx = new MyCustomElement();
  }

  blurButton(){

    console.log('hi')
  }

  Hello(){
    alert('Hello there');
  }
}

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
  }
}
