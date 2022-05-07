import { DutyEventsState } from './duty-events.state';
import { DutyEventsActions, DutyEventsActionTypes } from './duty-events.actions';
import { dutyEventsAdapter } from './duty-events.adapter';

const initialState: DutyEventsState = dutyEventsAdapter.getInitialState();

export function dutyEventsReducer(
  state: DutyEventsState = initialState,
  action: DutyEventsActions,
): DutyEventsState {
  switch (action.type) {
    case DutyEventsActionTypes.ADD_DUTY_EVENT:
      return dutyEventsAdapter.addOne(action.event, state);
    case DutyEventsActionTypes.DELETE_DUTY_EVENT:
      return dutyEventsAdapter.removeOne(action.id, state);
    case DutyEventsActionTypes.DELETE_ALL_DUTY_EVENTS:
      return dutyEventsAdapter.removeAll(state);
    default:
      return state;
  }
}
