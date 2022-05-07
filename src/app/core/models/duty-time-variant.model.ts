import { Time } from '@angular/common';
import { DurationObject } from 'ics';

export interface DutyTimeVariant {
  id: string;
  startTime: Time,
  duration: DurationObject
}
