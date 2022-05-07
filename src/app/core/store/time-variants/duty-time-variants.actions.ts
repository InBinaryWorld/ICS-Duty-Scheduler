import { Action } from '@ngrx/store';
import { DutyTimeVariant } from '../../models/duty-time-variant.model';

export enum DutyTimeVariantsActionTypes {
  ADD_DUTY_TIME_VARIANT = '[DutyTimeVariants] Add',
  UPDATE_DUTY_TIME_VARIANT = '[DutyTimeVariants] Update',
  DELETE_DUTY_TIME_VARIANT = '[DutyTimeVariants] Delete'
}

export class AddDutyTimeVariant implements Action {
  readonly type = DutyTimeVariantsActionTypes.ADD_DUTY_TIME_VARIANT;

  constructor(public timeVariant: DutyTimeVariant) {
  }
}

export class UpdateDutyTimeVariant implements Action {
  readonly type = DutyTimeVariantsActionTypes.UPDATE_DUTY_TIME_VARIANT;

  constructor(
    public id: string,
    public changes: Partial<DutyTimeVariant>,
  ) {
  }
}

export class DeleteDutyTimeVariant implements Action {
  readonly type = DutyTimeVariantsActionTypes.DELETE_DUTY_TIME_VARIANT;

  constructor(public id: string) {
  }
}

export type DutyTimeVariantsActions
  = AddDutyTimeVariant
  | UpdateDutyTimeVariant
  | DeleteDutyTimeVariant;
