import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan, PlanChoice } from 'src/app/models/planModel';

@Component({
  selector: 'app-plan-choices',
  templateUrl: `./plan-choices.component.html`,
  styles: []
})



export class PlanChoicesComponent {

@Output() selectPlan = new EventEmitter()
@Input() options:PlanChoice[] = [];
@Input() selectedPlan:any;
@Input() isYearPlan:boolean | undefined;



select(id: number){
 this.selectPlan.emit(id)
}

}
