import { dutyTimeVariantsFeatureName } from './time-variants/duty-time-variants.selectors';
import { DutyTimeVariantsState } from './time-variants/duty-time-variants.state';
import { dutyEventsFeatureName } from './events/duty-events.selectors';
import { dutyTypesFeatureName } from './duty-types/duty-types.selectors';
import { DutyTypesState } from './duty-types/duty-types.state';
import { DutyEventsState } from './events/duty-events.state';

export interface RootState {
  [dutyEventsFeatureName]: DutyEventsState;
  [dutyTypesFeatureName]: DutyTypesState
  [dutyTimeVariantsFeatureName]: DutyTimeVariantsState;
}
