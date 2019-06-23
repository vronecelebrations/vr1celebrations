import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbDatepickerModule, NbInputModule, NbSelectModule, NbButtonModule, NbStepperModule, NbListModule, NbToastrModule,  NbPopoverModule, NbUserModule, NbSidebarModule, NbActionsModule, NbCheckboxModule, NbTooltipModule, NbIconModule, NbBadgeModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbToastrModule.forRoot(),
    NbPopoverModule,
    NbUserModule,
    NbSidebarModule.forRoot(),
    NbActionsModule,
    NbCheckboxModule,
    NbTooltipModule,
    NbIconModule,
    NbBadgeModule
  ],
  exports:[
    CommonModule,
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbStepperModule,
    NbListModule,
    NbToastrModule,
    NbPopoverModule,
    NbUserModule,
    NbSidebarModule,
    NbActionsModule,
    NbCheckboxModule,
    NbTooltipModule,
    NbIconModule,
    NbBadgeModule
  ]
})
export class NebularThemeModule { }
