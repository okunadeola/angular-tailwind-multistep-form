import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Addon, PersonalInfo, Plan, PlanModel } from '../models/planModel';
import { initialData } from './initialdata';

@Injectable({
  providedIn: 'root'
})
export class PlanserviceService {

  planService =  new BehaviorSubject<PlanModel>(initialData())


  proceedToNext(payload: PersonalInfo | Plan | Array<Addon>, updateKey : string){
    console.log(payload)
    switch (updateKey) {
      case 'personalInfo':
        const data = payload as PersonalInfo
        const latest = {...this.planService.value, personalInfo: {...data}, step: this.planService.value.step+1}
        this.update(latest)
        break;
      case 'selectPlan':
        const data2 = payload as Plan
        const val = {...this.planService.value, plan: {...data2}, step: this.planService.value.step+1}
        this.update(val)
        break;
      case 'addons':
        const data3 = payload as Array<Addon>
        const snapshot = {...this.planService.value, addons:[...data3], step: this.planService.value.step+1}
        this.update(snapshot)
        break;

      default:
        break;
    }

  }

  update(data: PlanModel){
    window.localStorage.setItem('subplan', JSON.stringify(data))
    return this.planService.next(data)
  }

  goToPrevStep(){
    const current = {...this.planService.value, step: this.planService.value.step-1}
    window.localStorage.setItem('subplan', JSON.stringify(current))
    return this.planService.next(current)
  }

  goToPlanChoiceStep(){
    const snapshot = {...this.planService.value, step: 1}
    window.localStorage.setItem('subplan', JSON.stringify(snapshot))
    return this.planService.next(snapshot)
  }

  completeStep(){
    const data = {...this.planService.value, step: 4, isCompleted: true}
    window.localStorage.setItem('subplan', JSON.stringify(data))
    return this.planService.next(data)
  }
 
  seek(payload: number){
    const stepUIdata = {...this.planService.value, step: payload}
    window.localStorage.setItem('subplan', JSON.stringify(stepUIdata))
    return this.planService.next(stepUIdata)
  }









  constructor() { }



}
