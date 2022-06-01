import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { selectDutyTypesAll } from '../../../core/store/duty-types/duty-types.selectors';
import { RootState } from '../../../core/store/root-state.model';
import { DutyType } from '../../../core/models/duty-type.model';
import {
  DeleteDutyType,
  RestoreDefaultDutyType,
  SaveDutyType
} from '../../../core/store/duty-types/duty-types.actions';
import { DPValidators } from '../../../core/base/validators';

enum FormKeys {
  FULL_NAME = 'FULL_NAME',
  NAME = 'NAME',
  PLACE = 'PLACE'
}

@Component({
  selector: 'ds-type-settings',
  templateUrl: './type-settings.component.html',
  styleUrls: ['./type-settings.component.scss']
})
export class TypeSettingsComponent {
  FormKeys = FormKeys;

  dutyTypes: Observable<DutyType[]> = this.store.select(selectDutyTypesAll);

  form: FormGroup;
  typesControl: FormControl;

  constructor(protected readonly store: Store<RootState>,
              protected readonly formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      [FormKeys.NAME]: [undefined, DPValidators.shortName()],
      [FormKeys.PLACE]: [undefined, DPValidators.place()],
      [FormKeys.FULL_NAME]: [undefined, DPValidators.fullName()]
    });
    this.typesControl = this.formBuilder.control(null, Validators.required);
    this.typesControl.valueChanges.subscribe((type: DutyType) => this.form.setValue({
      [FormKeys.NAME]: type.id,
      [FormKeys.PLACE]: type.place,
      [FormKeys.FULL_NAME]: type.eventName,
    }))
  }

  typeTrackBy = (idx: number, type: DutyType) => type.id;

  deleteType(): void {
    this.store.dispatch(new DeleteDutyType(this.typesControl.value.id));
  }

  saveType(): void {
    const data = this.form.value;
    const dutyType: DutyType = {
      id: data[FormKeys.NAME],
      place: data[FormKeys.PLACE],
      eventName: data[FormKeys.FULL_NAME],
    };
    this.store.dispatch(new SaveDutyType(dutyType));
  }

  restore(): void {
    this.store.dispatch(new RestoreDefaultDutyType());
  }
}
