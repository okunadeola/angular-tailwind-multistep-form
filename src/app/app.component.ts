import { Component, OnInit } from '@angular/core';
import { PlanserviceService } from './service/planservice.service';
import { PlanModel } from './models/planModel';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  step:any

  constructor(private planService: PlanserviceService) {}

  ngOnInit(): void {
      // console.log(this.planService)
      this.planService.planService.subscribe((_planService:PlanModel)=>{
        this.step = _planService.step
      })
  }

}
