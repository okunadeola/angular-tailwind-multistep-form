import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlanModel } from 'src/app/models/planModel';

@Component({
  selector: 'app-choices-outline',
  templateUrl: `./choices-outline.html`,
  styles: []
})
export class ChoicesOutlineComponent {
  
  @Input() data: PlanModel | undefined

  @Input() isYearPlan: boolean | undefined

  @Output() action = new EventEmitter()



  toPlanUI(){
    this.action.emit()
  }
}
