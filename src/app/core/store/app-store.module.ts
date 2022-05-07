import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { localStorageSync } from 'ngrx-store-localstorage';
import { dutyEventsFeatureName } from './events/duty-events.selectors';
import { dutyTypesFeatureName } from './duty-types/duty-types.selectors';
import { dutyTimeVariantsFeatureName } from './time-variants/duty-time-variants.selectors';
import { DutyTypesStoreModule } from './duty-types/duty-types-store.module';
import { DutyTimeVariantsStoreModule } from './time-variants/duty-time-variants-store.module';
import { DutyEventsStoreModule } from './events/duty-events.module';
import { RootState } from './root-state.model';

function localStorageSyncReducer(reducer: ActionReducer<RootState>): ActionReducer<RootState> {
  return localStorageSync({
    keys: [
      dutyEventsFeatureName,
      dutyTypesFeatureName,
      dutyTimeVariantsFeatureName
    ],
    rehydrate: true
  })(reducer);
}

const metaReducers: Array<MetaReducer<RootState, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({} as any, { metaReducers }),
    EffectsModule.forRoot(),
    DutyTimeVariantsStoreModule,
    DutyEventsStoreModule,
    DutyTypesStoreModule
  ]
})
export class AppStoreModule {
}
