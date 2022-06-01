import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Time } from '@angular/common';

enum FormKey {
  HOURS = 'HOURS',
  MINUTES = 'MINUTES',
}

@Component({
  selector: 'ds-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TimePicker
    }
  ]
})
export class TimePicker implements ControlValueAccessor {
  FormKeys = FormKey;

  @Input()
  hourKey: string = 'TimePicker.Hours'

  @Input()
  minutesKey: string = 'TimePicker.Minutes'

  @Input()
  maxHours: number = 23;

  time: Time = { hours: 0, minutes: 0 };
  touched = false;
  disabled = false;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      [FormKey.HOURS]: [8, Validators.required],
      [FormKey.MINUTES]: [0, Validators.required]
    });
    this.form.valueChanges.subscribe(() => this.onChange());
  }

  onChange: () => any = () => {
  };

  onTouched: any = () => {
  };

  registerOnChange(onChange: any): void {
    this.onChange = () => {
      const data = this.form.value;
      onChange({
        hours: data[FormKey.HOURS],
        minutes: data[FormKey.MINUTES],
      } as Time);
    }
    this.onChange();
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(time: Time): void {
    if (time) {
      this.form.setValue({
        [FormKey.HOURS]: time.hours,
        [FormKey.MINUTES]: time.minutes,
      })
    }
    this.onChange();
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
