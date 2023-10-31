import { Component, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/models/planModel';
import { Step } from 'src/app/models/stepModel';
import { PlanserviceService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-steps',
  templateUrl: `./steps.component.html`,
  styles: [
  ]
})
export class StepsComponent implements OnInit {


  step:any
  isCompleted: boolean = false

  stepInfo: Step[] = [
    {
        stepNo: 1,
        stepDesc: 'your info'
    },
    {
        stepNo: 2,
        stepDesc: 'select plan'
    },
    {
        stepNo: 3,
        stepDesc: 'add-ons'
    },
    {
        stepNo: 4,
        stepDesc: 'summary'
    },
]

  constructor(private planService: PlanserviceService) {}

  ngOnInit(): void {
      this.planService.planService.subscribe((_planService:PlanModel)=>{
        this.step = _planService.step
        this.isCompleted = _planService.isCompleted
      })
  }

  // ngDoCheck(): void {
  //     console.log('changes occur')
  // }

  attemptSeekStep(step: number){
    this.planService.seek(step)
  }
}
