import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: `./title.component.html`,
  styles: []
})
export class TitleComponent {

  @Input() title:string = ''
  @Input() desc:string = ''

}
