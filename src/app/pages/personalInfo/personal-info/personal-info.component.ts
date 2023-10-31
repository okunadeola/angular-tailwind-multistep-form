import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalInfo, PlanModel } from 'src/app/models/planModel';
import { PlanserviceService } from 'src/app/service/planservice.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: `./personal-info.component.html`,
  styles: []
})
export class PersonalInfoComponent implements OnInit {

  step: any
  formBuilder: any
  title = 'Personal info'
  desc = 'Please provide your name, email address, and phone mumber'
  defaultData: any
  


  ngOnInit(): void {
    this.planService.planService.subscribe((_planService:PlanModel)=>{
      this.step = _planService.step
      this.defaultData = _planService.personalInfo
      this.setForm()
    })
}
  constructor(private planService: PlanserviceService, private fb: FormBuilder) {
  }


  setForm(){
    this.formBuilder = this.fb.group({
      name: [this.defaultData?.name || '', [Validators.required]],
      email: [this.defaultData?.email || '', [Validators.required, Validators.email]],
      phone: [this.defaultData?.phone || '', [
        Validators.required, 
        Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$")]]
    })
  }

  get fc(){
    return this.formBuilder.controls
  }


  proceedToNext(){
    // console.log(this.formBuilder)

    if(this.formBuilder.valid){
      const data = this.formBuilder.value as PersonalInfo
      this.planService.proceedToNext(data, 'personalInfo')
    }else{
      if (this.formBuilder.invalid) {
        this.markFormGroupTouched(this.formBuilder);
        return;
      }
    }
  }


  markFormGroupTouched(formGroup: FormGroup): void {
    ( Object as any).values(formGroup.controls).forEach((control: any) => {
        control.markAsTouched();
        if (control.controls) {
            this.markFormGroupTouched(control);
        }
    });
}















}
