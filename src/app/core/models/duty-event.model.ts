import { DutyType } from './duty-type.model';
import { DutyTimeVariant } from './duty-time-variant.model';

export interface DutyEvent {
  id: string;
  startDate: Date;
  dutyType: DutyType
  timeVariant: DutyTimeVariant
}
