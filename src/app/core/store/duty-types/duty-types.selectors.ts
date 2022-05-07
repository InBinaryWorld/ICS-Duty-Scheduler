import { dutyTypesAdapter } from './duty-types.adapter';
import { createFeatureSelector } from '@ngrx/store';
import { DutyTypesState } from './duty-types.state';

export const dutyTypesFeatureName = 'dutyTypes';

export const selectDutyTypesState = createFeatureSelector<DutyTypesState>(dutyTypesFeatureName);

export const {
  selectIds: selectDutyTypesIds,
  selectEntities: selectDutyTypesEntities,
  selectAll: selectDutyTypesAll,
  selectTotal: selectDutyTypesTotal,
} = dutyTypesAdapter.getSelectors(selectDutyTypesState);
