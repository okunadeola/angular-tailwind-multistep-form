import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: `./next-button.component.html`,
  styles: []
})
export class NextButtonComponent {
@Input() step:any
@Output() toNext = new EventEmitter()


  fireNext(){
    this.toNext.emit()
  }

}
