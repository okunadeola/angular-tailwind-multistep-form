import { Component } from '@angular/core';
import { Addon, PlanModel } from 'src/app/models/planModel';
import { PlanserviceService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-addon',
  templateUrl: `./addon.component.html`,
  styles: [
  ]
})
export class AddonComponent {

  title = 'Pick add-ons'
  desc = 'Add-ons help enhance your gaming experience.'
  selectedAddons: Array<Addon> = []


  addonOptions:Addon[]  = [
    {
      id: 1,
      name: 'Online service',
      desc: 'Access to multiplayer games',
      yearly: 10,
      monthly: 1
    },
    {
      id: 2,
      name: 'Larger storage',
      desc: 'Extra 1TB of cloud save',
      yearly: 20,
      monthly: 2
    },
    {
      id: 3,
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      yearly: 20,
      monthly: 2
    },
  ]

  isYearPlan:boolean = false



  ngOnInit(): void {
    this.planService.planService.subscribe((_planService:PlanModel)=>{

      this.selectedAddons = _planService.addons
      this.isYearPlan = _planService.plan.planDuration === 'yearly'
    
    })
}


  constructor(private planService: PlanserviceService,) {}


  selectAddon(id: number){
    const item = this.selectedAddons?.find(it=> it.id === id)
    const theItem = this.addonOptions?.find(it=> it.id === id)

    if(item){
      this.selectedAddons = [...this.selectedAddons?.filter(it => it.id !== item.id)]
    }else{
      this.selectedAddons = [...this.selectedAddons, theItem!]
    }
  }



  proceedToNext(){
      this.planService.proceedToNext(this.selectedAddons, 'addons')
  }

}
