import { Component } from '@angular/core';
import { PlanserviceService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-prev-button',
  templateUrl: `./prev-button.component.html`,
  styles: []
})


export class PrevButtonComponent {

  constructor(private _planService:PlanserviceService){}


  goBack(){
    this._planService.goToPrevStep()
  }
}
