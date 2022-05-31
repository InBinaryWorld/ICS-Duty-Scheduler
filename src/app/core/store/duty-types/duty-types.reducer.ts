import { DutyTypesState } from './duty-types.state';
import { DutyTypesActions, DutyTypesActionTypes } from './duty-types.actions';
import { dutyTypesAdapter } from './duty-types.adapter';
import { DutyType } from '../../models/duty-type.model';

const defaultVariants: DutyType[] = [
  {
    id: 'Dziecięcy 👶🏼',
    eventName: 'Dyżur Dziecięcy 👶🏼',
    place: 'Szpital Powiatowy w Rawiczu Sp. z o.o.,\n' +
      'Generała Grota-Roweckiego 6, 63-900 Rawicz, Polska'
  }, {
    id: 'OIOM 🏥',
    eventName: 'Dyżur COVID 🏥',
    place: 'Szpital Powiatowy w Rawiczu Sp. z o.o.,\n' +
      'Generała Grota-Roweckiego 6, 63-900 Rawicz, Polska'
  }, {
    id: 'Położnictwo 👩‍⚕',
    eventName: 'Dyżur Położnictwo 👩‍⚕',
    place: 'Szpital Powiatowy w Rawiczu Sp. z o.o.,\n' +
      'Generała Grota-Roweckiego 6, 63-900 Rawicz, Polska'
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
