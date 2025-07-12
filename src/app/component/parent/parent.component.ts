import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  childReply: string = '';

  handleReply(data: string) {
    console.log(data);
    this.childReply = data;
  }
}
