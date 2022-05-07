import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dutyTypesFeatureName } from './duty-types.selectors';
import { dutyTypesReducer } from './duty-types.reducer';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    StoreModule.forFeature(dutyTypesFeatureName, dutyTypesReducer),
    EffectsModule.forFeature([])
  ]
})
export class DutyTypesStoreModule {
}
