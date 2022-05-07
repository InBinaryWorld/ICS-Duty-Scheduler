import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dutyEventsFeatureName } from './duty-events.selectors';
import { dutyEventsReducer } from './duty-events.reducer';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    StoreModule.forFeature(dutyEventsFeatureName, dutyEventsReducer),
    EffectsModule.forFeature([])
  ]
})
export class DutyEventsStoreModule {
}
