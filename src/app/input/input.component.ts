import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
  <input type="number" />
  `,
  styles: []
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
