import { Action } from '@ngrx/store';
import { DutyType } from '../../models/duty-type.model';

export enum DutyTypesActionTypes {
  SAVE_DUTY_TYPES = '[DutyTypes] Save',
  DELETE_DUTY_TYPES = '[DutyTypes] Delete',
  RESTORE_DEFAULT_DUTY_TYPES = '[DutyTypes] Restore default'
}

export class SaveDutyType implements Action {
  readonly type = DutyTypesActionTypes.SAVE_DUTY_TYPES;

  constructor(public dutyType: DutyType) {
  }
}

export class DeleteDutyType implements Action {
  readonly type = DutyTypesActionTypes.DELETE_DUTY_TYPES;

  constructor(public id: string) {
  }
}

export class RestoreDefaultDutyType implements Action {
  readonly type = DutyTypesActionTypes.RESTORE_DEFAULT_DUTY_TYPES;

}

export type DutyTypesActions = SaveDutyType | DeleteDutyType | RestoreDefaultDutyType;
