import { DutyTimeVariantsState } from './duty-time-variants.state';
import { DutyTimeVariantsActions, DutyTimeVariantsActionTypes } from './duty-time-variants.actions';
import { dutyTimeVariantsAdapter } from './duty-time-variants.adapter';
import { DutyTimeVariant } from '../../models/duty-time-variant.model';
import { StoreUtils } from '../utils/store-utils';

const defaultVariants: DutyTimeVariant[] = [
  {
    id: 'Dniówka ☀️',
    startTime: { hours: 7, minutes: 0 },
    duration: { hours: 12, minutes: 0 }
  }, {
    id: 'Nocka 🌙',
    startTime: { hours: 19, minutes: 0 },
    duration: { hours: 12, minutes: 0 }
  }, {
    id: 'Dzień&Noc 💰',
    startTime: { hours: 7, minutes: 0 },
    duration: { hours: 24, minutes: 0 }
  }
];

const initialState: DutyTimeVariantsState = StoreUtils.initStateForValues(defaultVariants);

export function dutyTimeVariantsReducer(
  state: DutyTimeVariantsState = initialState,
  action: DutyTimeVariantsActions,
): DutyTimeVariantsState {
  switch (action.type) {
    case DutyTimeVariantsActionTypes.SAVE_DUTY_TIME_VARIANT:
      return dutyTimeVariantsAdapter.upsertOne(action.timeVariant, state);
    case DutyTimeVariantsActionTypes.DELETE_DUTY_TIME_VARIANT:
      return dutyTimeVariantsAdapter.removeOne(action.id, state);
    case DutyTimeVariantsActionTypes.RESTORE_DEFAULT_DUTY_TIME_VARIANT:
      return dutyTimeVariantsAdapter.setAll(defaultVariants, state);
    default:
      return state;
  }
}
