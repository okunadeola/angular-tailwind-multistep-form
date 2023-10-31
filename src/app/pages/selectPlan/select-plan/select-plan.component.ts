import { Component, DoCheck, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Plan, PlanChoice, PlanModel } from 'src/app/models/planModel';
import { PlanserviceService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: `./select-plan.component.html`,
  styles: [
  ]
})
export class SelectPlanComponent implements OnInit, DoCheck {

  step: any
  title = 'Select your plan'
  desc = 'You have the option of monthlty or yearly billing.'
  planChoice: Plan = {
    planName: '',
    planAmount: 0,
    planDuration: ''
  }

  planOptions:PlanChoice[]  = [
    {
      image: '/assets/images/icon-arcade.svg',
      name: 'Arcade',
      monthly: 9,
      yearly: 90,
      id: 1
    },
    {
      image: '/assets/images/icon-advanced.svg',
      name: 'Advanced',
      monthly: 12,
      yearly: 120,
      id: 2
    },
    {
      image: '/assets/images/icon-pro.svg',
      name: 'Pro',
      monthly: 15,
      yearly: 150,
      id: 3
    },
  ]

  isYearPlan:boolean = false


  


  ngOnInit(): void {
    this.planService.planService.subscribe((_planService:PlanModel)=>{
      this.planChoice = _planService.plan
      this.isYearPlan = _planService.plan.planDuration === 'yearly'
    })
}
  constructor(private planService: PlanserviceService, private _snackbar: MatSnackBar) {}




  selectPlanChoice(id:number){
    console.log(id)
    const item = this.planOptions?.find(it => it.id === id)
    const amount = this.isYearPlan ? item!.yearly : item!.monthly
    const duration = this.isYearPlan ? 'yearly' : 'monthly'

    this.planChoice = {
      planName: item!.name,
      planAmount: amount,
      planDuration: duration
    }

  }


  ngDoCheck(): void {
    const item = this.planOptions?.find(it => it.name === this.planChoice?.planName)

    if(item){
      const amount = this.isYearPlan ? item.yearly : item.monthly
      const duration = this.isYearPlan ? 'yearly' : 'monthly'
  

      this.planChoice = {
        ...this.planChoice,
        planAmount: amount,
        planDuration: duration
      }
      
    }
  }


  toggleDuration(val : boolean){
    this.isYearPlan = !this.isYearPlan
  }


  proceedToNext(){

    const { planName, planAmount, planDuration} = this.planChoice

    if(planName && planAmount && planDuration){
      this.planService.proceedToNext(this.planChoice, 'selectPlan')

    }else{
      this._snackbar.open('Please select a plan', 'Ok', { duration: 3000 });
    }

  }




}
