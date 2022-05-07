import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PlannerComponent } from './planner/planner.component';
import { SettingsComponent } from './settings/settings.component';
import { DutyEventItemComponent } from './planner/event-element/duty-event-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PlannerComponent,
    DutyEventItemComponent,
    SettingsComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class ComponentsModule {
}
