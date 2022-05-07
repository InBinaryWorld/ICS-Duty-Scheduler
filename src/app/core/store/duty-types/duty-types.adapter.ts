import { createEntityAdapter } from '@ngrx/entity';
import { DutyType } from "../../models/duty-type.model";

export const dutyTypesAdapter = createEntityAdapter<DutyType>();
