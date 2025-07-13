import { Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;

  updateChild() {
    this.child.changeMessage();
  }
}
