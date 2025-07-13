import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  message = 'Hello from Child!';
  changeMessage() {
    this.message = 'Message changed!';
  }
}
