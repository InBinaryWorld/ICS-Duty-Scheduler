import { createEntityAdapter } from '@ngrx/entity';
import { DutyTimeVariant } from "../../models/duty-time-variant.model";

export const dutyTimeVariantsAdapter = createEntityAdapter<DutyTimeVariant>();
