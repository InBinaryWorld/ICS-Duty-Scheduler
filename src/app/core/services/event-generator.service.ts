import { Injectable } from '@angular/core';
import { DutyTimeVariant } from '../models/duty-time-variant.model';
import { DutyType } from '../models/duty-type.model';
import { DutyEvent } from '../models/duty-event.model';

@Injectable({
  providedIn: 'root',
})
export class EventGeneratorService {

  private _id = Number.MIN_VALUE;

  private getNextId(): string {
    return (this._id++).toString();
  }

  public buildEvent(date: Date, timeVariant: DutyTimeVariant, dutyType: DutyType): DutyEvent {
    const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), timeVariant.startTime.hours, timeVariant.startTime.minutes)
    return {
      id: this.getNextId(),
      startDate,
      timeVariant,
      dutyType
    }
  }
}