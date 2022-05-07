import { dutyEventsAdapter } from './duty-events.adapter';
import { createFeatureSelector } from '@ngrx/store';
import { DutyEventsState } from './duty-events.state';

export const dutyEventsFeatureName = 'dutyEvents';

export const selectDutyEventsState = createFeatureSelector<DutyEventsState>(dutyEventsFeatureName);

export const {
  selectIds: selectDutyEventsIds,
  selectEntities: selectDutyEventsEntities,
  selectAll: selectDutyEventsAll,
  selectTotal: selectDutyEventsTotal,
} = dutyEventsAdapter.getSelectors(selectDutyEventsState);
