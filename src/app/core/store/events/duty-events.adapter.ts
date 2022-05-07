import { createEntityAdapter } from '@ngrx/entity';
import { DutyEvent } from "../../models/duty-event.model";

export const dutyEventsAdapter = createEntityAdapter<DutyEvent>();
