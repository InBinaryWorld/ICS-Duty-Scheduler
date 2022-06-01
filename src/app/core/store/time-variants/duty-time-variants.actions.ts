import { Action } from '@ngrx/store';
import { DutyTimeVariant } from '../../models/duty-time-variant.model';

export enum DutyTimeVariantsActionTypes {
  SAVE_DUTY_TIME_VARIANT = '[DutyTimeVariants] Save',
  DELETE_DUTY_TIME_VARIANT = '[DutyTimeVariants] Delete',
  RESTORE_DEFAULT_DUTY_TIME_VARIANT = '[DutyTimeVariants] Restore default'
}

export class SaveDutyTimeVariant implements Action {
  readonly type = DutyTimeVariantsActionTypes.SAVE_DUTY_TIME_VARIANT;

  constructor(public timeVariant: DutyTimeVariant) {
  }
}

export class DeleteDutyTimeVariant implements Action {
  readonly type = DutyTimeVariantsActionTypes.DELETE_DUTY_TIME_VARIANT;

  constructor(public id: string) {
  }
}

export class RestoreDefaultDutyTimeVariant implements Action {
  readonly type = DutyTimeVariantsActionTypes.RESTORE_DEFAULT_DUTY_TIME_VARIANT;

}

export type DutyTimeVariantsActions = SaveDutyTimeVariant | DeleteDutyTimeVariant | RestoreDefaultDutyTimeVariant;
