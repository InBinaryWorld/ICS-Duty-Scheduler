import { DutyTypesState } from './duty-types.state';
import { DutyTypesActions, DutyTypesActionTypes } from './duty-types.actions';
import { dutyTypesAdapter } from './duty-types.adapter';
import { DutyType } from '../../models/duty-type.model';
import { StoreUtils } from '../utils/store-utils';

const defaultVariants: DutyType[] = [
  {
    id: 'Pediatria 👶🏼',
    eventName: 'Dyżur Pediatria 👶🏼',
    place: 'Szpital Powiatowy w Rawiczu Sp. z o.o.,\n' +
      'Generała Grota-Roweckiego 6, 63-900 Rawicz, Polska'
  }, {
    id: 'OIOM 🏥',
    eventName: 'Dyżur OIOM 🏥',
    place: 'Szpital Powiatowy w Rawiczu Sp. z o.o.,\n' +
      'Generała Grota-Roweckiego 6, 63-900 Rawicz, Polska'
  }, {
    id: 'Neo 👩‍⚕',
    eventName: 'Dyżur Neonantologia 👩‍⚕',
    place: 'Szpital Powiatowy w Rawiczu Sp. z o.o.,\n' +
      'Generała Grota-Roweckiego 6, 63-900 Rawicz, Polska'
  }
];

const initialState: DutyTypesState = StoreUtils.initStateForValues(defaultVariants);

export function dutyTypesReducer(
  state: DutyTypesState = initialState,
  action: DutyTypesActions,
): DutyTypesState {
  switch (action.type) {
    case DutyTypesActionTypes.SAVE_DUTY_TYPES:
      return dutyTypesAdapter.upsertOne(action.dutyType, state);
    case DutyTypesActionTypes.DELETE_DUTY_TYPES:
      return dutyTypesAdapter.removeOne(action.id, state);
    case DutyTypesActionTypes.RESTORE_DEFAULT_DUTY_TYPES:
      return dutyTypesAdapter.setAll(defaultVariants, state);
    default:
      return state;
  }
}
