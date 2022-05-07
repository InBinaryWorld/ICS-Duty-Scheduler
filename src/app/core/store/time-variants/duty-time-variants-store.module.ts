import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dutyTimeVariantsFeatureName } from './duty-time-variants.selectors';
import { dutyTimeVariantsReducer } from './duty-time-variants.reducer';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    StoreModule.forFeature(dutyTimeVariantsFeatureName, dutyTimeVariantsReducer),
    EffectsModule.forFeature([])
  ]
})
export class DutyTimeVariantsStoreModule {
}
