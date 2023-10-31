import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Addon } from 'src/app/models/planModel';

type PosValue = {
  selected : boolean,
  position: number
}
@Component({
  selector: 'app-addon-choices',
  templateUrl: `./addon-choices.component.html`,
  styles: []
})



export class AddonChoicesComponent implements DoCheck {
  @Input() addonOptions: Array<Addon> = []
  @Input() selectedAddons:Array<Addon> =[]
  @Input() isYearPlan: boolean | undefined
  @Output() selectAddon = new EventEmitter()

  selected:Array<PosValue> = []


  ngDoCheck(): void {

      this.selected = []
      for (let i = 0; i < this.addonOptions.length ; i++) {

        this.selectedAddons.some(it => it.id === this.addonOptions[i].id ) ? this.selected.push({selected:true, position: i+1}) : this.selected.push({selected:false, position: i+1})

      }
   
  }

}
