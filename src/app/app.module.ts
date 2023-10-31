import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddonComponent } from './pages/pickAddon/addon/addon.component';
import { AddonChoicesComponent } from './pages/pickAddon/components/addon-choices/addon-choices.component';
import { ChoiceComponent } from './pages/pickAddon/components/choice/choice.component';
import { InputComponent } from './pages/personalInfo/components/input/input.component';
import { PersonalInfoComponent } from './pages/personalInfo/personal-info/personal-info.component';
import { SelectPlanComponent } from './pages/selectPlan/select-plan/select-plan.component';
import { DurationTogglerComponent } from './pages/selectPlan/components/duration-toggler/duration-toggler.component';
import { PlanChoicesComponent } from './pages/selectPlan/components/plan-choices/plan-choices.component';
import { TotalComponent } from './pages/summary/total/total.component';
import { ChoicesOutlineComponent } from './pages/summary/choices-outline/choices-outline.component';
import { SummaryComponent } from './pages/summary/summary/summary.component';
import { ThnakYouComponent } from './pages/thnak-you/thnak-you.component';
import { TitleComponent } from './components/title/title.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepsComponent } from './components/steps/steps.component';
import { PrevButtonComponent } from './components/prev-button/prev-button.component';
import { NextButtonComponent } from './components/next-button/next-button.component';
import { ButtonContainerComponent } from './components/button-container/button-container.component';
import { PlanserviceService } from './service/planservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AddonComponent,
    AddonChoicesComponent,
    ChoiceComponent,
    InputComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    DurationTogglerComponent,
    PlanChoicesComponent,
    TotalComponent,
    ChoicesOutlineComponent,
    SummaryComponent,
    ThnakYouComponent,
    TitleComponent,
    StepperComponent,
    StepsComponent,
    PrevButtonComponent,
    NextButtonComponent,
    ButtonContainerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

  ],
  providers: [PlanserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
