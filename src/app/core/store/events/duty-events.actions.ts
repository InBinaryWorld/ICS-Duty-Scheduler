import { Action } from '@ngrx/store';
import { DutyEvent } from '../../models/duty-event.model';

export enum DutyEventsActionTypes {
  ADD_DUTY_EVENT = '[DutyEvents] Add',
  DELETE_DUTY_EVENT = '[DutyEvents] Delete',
  DELETE_ALL_DUTY_EVENTS = '[DutyEvents] Delete All'
}

export class AddDutyEvent implements Action {
  readonly type = DutyEventsActionTypes.ADD_DUTY_EVENT;

  constructor(public event: DutyEvent) {
  }
}

export class DeleteAllDutyEvents implements Action {
  readonly type = DutyEventsActionTypes.DELETE_ALL_DUTY_EVENTS;

  constructor() {
  }
}

export class DeleteDutyEvent implements Action {
  readonly type = DutyEventsActionTypes.DELETE_DUTY_EVENT;

  constructor(public id: string) {
  }
}

export type DutyEventsActions
  = AddDutyEvent
  | DeleteDutyEvent
  | DeleteAllDutyEvents;
