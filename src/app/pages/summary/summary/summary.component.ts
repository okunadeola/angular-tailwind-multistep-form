import { Component } from '@angular/core';
import { PlanModel } from 'src/app/models/planModel';
import { PlanserviceService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-summary',
  templateUrl: `./summary.component.html`,
  styles: [
  ]
})
export class SummaryComponent {


  title = 'Finishing up'
  desc = 'Double-check everything looks OK before confirming.'
  isYearPlan:boolean = false
  total:number = 0
  currentData: PlanModel | undefined

  ngOnInit(): void {
    this.planService.planService.subscribe((_planService:PlanModel)=>{
   
      this.isYearPlan = _planService.plan.planDuration === 'yearly'
      this.currentData = _planService
      this.calculateTotal()
    
    })
  }

  constructor(private planService: PlanserviceService,) {}



  calculateTotal(){
          // {monthly, yearly} -> extracting/destructuring
          const addonTotal = this.currentData?.addons?.reduce((a, {monthly, yearly})=> this.isYearPlan ? a+yearly : a + monthly, 0)

          const planAmount = this.currentData?.plan?.planAmount
      
          this.total = addonTotal! + planAmount!
  }


  gotoPlan(){
    this.planService.goToPlanChoiceStep()
  }

  proceedToNext(){
    this.planService.completeStep()
  }

}
