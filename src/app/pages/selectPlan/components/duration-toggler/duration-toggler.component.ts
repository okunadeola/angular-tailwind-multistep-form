import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-duration-toggler',
  templateUrl: `./duration-toggler.component.html`,
  styles: []
})


export class DurationTogglerComponent implements OnInit {

@Output() toggle = new EventEmitter()
@Input() isYearPlan: boolean | undefined

isChecked: any


ngOnInit(): void {
    this.isChecked = this.isYearPlan
}


}
