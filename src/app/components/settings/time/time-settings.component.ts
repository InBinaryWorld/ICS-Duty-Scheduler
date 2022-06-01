import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RootState } from '../../../core/store/root-state.model';
import { selectDutyTimeVariantsAll } from '../../../core/store/time-variants/duty-time-variants.selectors';
import { DutyTimeVariant } from '../../../core/models/duty-time-variant.model';
import {
  DeleteDutyTimeVariant,
  RestoreDefaultDutyTimeVariant,
  SaveDutyTimeVariant
} from '../../../core/store/time-variants/duty-time-variants.actions';
import { DPValidators } from '../../../core/base/validators';

enum FormKeys {
  NAME = 'NAME',
  DURATION = 'DURATION',
  START_TIME = 'START_TIME'
}

@Component({
  selector: 'ds-time-settings',
  templateUrl: './time-settings.component.html',
  styleUrls: ['./time-settings.component.scss']
})
export class TimeSettingsComponent {

  dutyTimeVariants: Observable<DutyTimeVariant[]> = this.store.select(selectDutyTimeVariantsAll);

  FormKeys = FormKeys;
  form: FormGroup;
  variantsControl: FormControl;

  constructor(protected readonly store: Store<RootState>,
              protected readonly formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      [FormKeys.NAME]: [undefined, DPValidators.shortName()],
      [FormKeys.DURATION]: [{ hours: 8, minutes: 0 }, Validators.required],
      [FormKeys.START_TIME]: [{ hours: 7, minutes: 0 }, Validators.required]
    });
    this.variantsControl = this.formBuilder.control(null, Validators.required);
    this.variantsControl.valueChanges.subscribe((variant: DutyTimeVariant) => this.form.setValue({
      [FormKeys.NAME]: variant.id,
      [FormKeys.DURATION]: variant.duration,
      [FormKeys.START_TIME]: variant.startTime,
    }))
  }

  timeTrackBy = (idx: number, variant: DutyTimeVariant) => variant.id;

  deleteVariant(): void {
    this.store.dispatch(new DeleteDutyTimeVariant(this.variantsControl.value.id));
  }

  addVariant(): void {
    const data = this.form.value;
    const timeVariant: DutyTimeVariant = {
      id: data[FormKeys.NAME],
      duration: data[FormKeys.DURATION],
      startTime: data[FormKeys.START_TIME],
    };
    this.store.dispatch(new SaveDutyTimeVariant(timeVariant));
  }

  restore(): void {
    this.store.dispatch(new RestoreDefaultDutyTimeVariant());
  }
}
