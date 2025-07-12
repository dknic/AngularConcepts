import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // @Input() message: string = 'childMessage';
  @Output() replyEvent = new EventEmitter<string>();

  reply: string = '';
  send() {
    this.replyEvent.emit(this.reply);
  }
}
