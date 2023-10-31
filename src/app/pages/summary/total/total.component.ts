import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: `./total.component.html`,
  styles: [
  ]
})
export class TotalComponent {
  @Input() total: number | undefined

  @Input() isYearPlan: boolean | undefined
  
}
