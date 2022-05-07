import { dutyTimeVariantsAdapter } from './duty-time-variants.adapter';
import { createFeatureSelector } from '@ngrx/store';
import { DutyTimeVariantsState } from './duty-time-variants.state';

export const dutyTimeVariantsFeatureName = 'dutyTimeVariants';

export const selectDutyTimeVariantsState = createFeatureSelector<DutyTimeVariantsState>(dutyTimeVariantsFeatureName);

export const {
  selectIds: selectDutyTimeVariantsIds,
  selectEntities: selectDutyTimeVariantsEntities,
  selectAll: selectDutyTimeVariantsAll,
  selectTotal: selectDutyTimeVariantsTotal,
} = dutyTimeVariantsAdapter.getSelectors(selectDutyTimeVariantsState);
