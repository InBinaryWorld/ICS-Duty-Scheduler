import { DutyTypesState } from './duty-types.state';
import { DutyTypesActions, DutyTypesActionTypes } from './duty-types.actions';
import { dutyTypesAdapter } from './duty-types.adapter';
import { DutyType } from '../../models/duty-type.model';

const defaultVariants: DutyType[] = [
  {
    id: 'COVID',
    eventName: 'Dyżur na COVID',
    place: 'Szpital w Rawiczu'
  }, {
    id: 'Położnictwo',
    eventName: 'Dyżur na odziale Położniczym',
    place: 'Szpital w Rawiczu'
  }, {
    id: 'Dziecięcy',
    eventName: 'Dyżur na odziale Dziecięcym',
    place: 'Szpital w Rawiczu'
  }
]

const initialState: DutyTypesState = defaultVariants.reduce(
  (state, variant) => dutyTypesAdapter.addOne(variant, state),
  dutyTypesAdapter.getInitialState()
);

export function dutyTypesReducer(
  state: DutyTypesState = initialState,
  action: DutyTypesActions,
): DutyTypesState {
  switch (action.type) {
    case DutyTypesActionTypes.ADD_DUTY_TYPES:
      return dutyTypesAdapter.addOne(action.dutyType, state);
    case DutyTypesActionTypes.UPDATE_DUTY_TYPES:
      return dutyTypesAdapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);
    case DutyTypesActionTypes.DELETE_DUTY_TYPES:
      return dutyTypesAdapter.removeOne(action.id, state);
    default:
      return state;
  }
}
