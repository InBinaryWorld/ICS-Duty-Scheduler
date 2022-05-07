import { Action } from '@ngrx/store';
import { DutyType } from "../../models/duty-type.model";

export enum DutyTypesActionTypes {
  ADD_DUTY_TYPES = '[DutyTypes] Add',
  UPDATE_DUTY_TYPES = '[DutyTypes] Update',
  DELETE_DUTY_TYPES = '[DutyTypes] Delete'
}

export class AddDutyType implements Action {
  readonly type = DutyTypesActionTypes.ADD_DUTY_TYPES;

  constructor(public dutyType: DutyType) {
  }
}

export class UpdateDutyType implements Action {
  readonly type = DutyTypesActionTypes.UPDATE_DUTY_TYPES;

  constructor(
    public id: string,
    public changes: Partial<DutyType>,
  ) {
  }
}

export class DeleteDutyType implements Action {
  readonly type = DutyTypesActionTypes.DELETE_DUTY_TYPES;

  constructor(public id: string) {
  }
}

export type DutyTypesActions
  = AddDutyType
  | UpdateDutyType
  | DeleteDutyType;
