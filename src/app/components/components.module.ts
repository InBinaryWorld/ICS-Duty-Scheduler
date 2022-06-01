import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PlannerComponent } from './planner/planner.component';
import { DutyEventItemComponent } from './planner/event-element/duty-event-item.component';
import { SettingsComponent } from './settings/settings.component';
import { TypeSettingsComponent } from './settings/type/type-settings.component';
import { TimeSettingsComponent } from './settings/time/time-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PlannerComponent,
    DutyEventItemComponent,
    SettingsComponent,
    TypeSettingsComponent,
    TimeSettingsComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class ComponentsModule {
}
