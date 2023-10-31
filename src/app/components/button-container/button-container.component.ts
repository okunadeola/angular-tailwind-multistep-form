import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanModel } from 'src/app/models/planModel';
import { PlanserviceService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-button-container',
  templateUrl: `./button-container.component.html`,
  styles: [
  ]
})
export class ButtonContainerComponent implements OnInit {
 @Output() nextAction = new EventEmitter()
  data: any

  ngOnInit(): void {
    this.planService.planService.subscribe((_planService:PlanModel)=>{
      this.data = _planService

    })
}
  

constructor(private planService: PlanserviceService){}


nextEmitter(){
  this.nextAction.emit()
}

}
