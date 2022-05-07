import { EntityState } from '@ngrx/entity';
import { DutyEvent } from "../../models/duty-event.model";

export interface DutyEventsState extends EntityState<DutyEvent> {
}
