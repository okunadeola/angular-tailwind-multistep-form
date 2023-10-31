import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: `./input.component.html`,
  styles: [
  ]
})
export class InputComponent {

@Input() label:any
@Input() placeholder:any
@Input() error:any
@Input() type:any
@Input() name:any
@Input() control:any


}
