import { DutyTimeVariantsState } from './duty-time-variants.state';
import { DutyTimeVariantsActions, DutyTimeVariantsActionTypes } from './duty-time-variants.actions';
import { dutyTimeVariantsAdapter } from './duty-time-variants.adapter';
import { DutyTimeVariant } from '../../models/duty-time-variant.model';

const defaultVariants: DutyTimeVariant[] = [
  {
    id: 'Dniówka ☀️',
    startTime: { hours: 7, minutes: 0 },
    duration: { days: 0, hours: 12, minutes: 0 }
  }, {
    id: 'Nocka 🌙',
    startTime: { hours: 19, minutes: 0 },
    duration: { days: 0, hours: 12, minutes: 0 }
  }
]

const initialState: DutyTimeVariantsState = defaultVariants.reduce(
  (state, variant) => dutyTimeVariantsAdapter.addOne(variant, state),
  dutyTimeVariantsAdapter.getInitialState()
);

export function dutyTimeVariantsReducer(
  state: DutyTimeVariantsState = initialState,
  action: DutyTimeVariantsActions,
): DutyTimeVariantsState {
  switch (action.type) {
    case DutyTimeVariantsActionTypes.ADD_DUTY_TIME_VARIANT:
      return dutyTimeVariantsAdapter.addOne(action.timeVariant, state);
    case DutyTimeVariantsActionTypes.UPDATE_DUTY_TIME_VARIANT:
      return dutyTimeVariantsAdapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);
    case DutyTimeVariantsActionTypes.DELETE_DUTY_TIME_VARIANT:
      return dutyTimeVariantsAdapter.removeOne(action.id, state);
    default:
      return state;
  }
}
