import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNil } from 'lodash-es';

@Component({
  selector: 'ds-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NumberPicker
    }
  ]
})
export class NumberPicker implements ControlValueAccessor {
  _value: number = 0;
  touched = false;
  disabled = false;

  @Input()
  step: number = 1;

  @Input()
  min: number = Number.MIN_SAFE_INTEGER;

  @Input()
  max: number = Number.MAX_SAFE_INTEGER;

  get value(): number {
    return this._value;
  }

  set value(value: number | undefined) {
    if (isNil(value)) {
      this._value = 0;
    } else if (value < this.min) {
      this._value = this.min;
    } else if (value > this.max) {
      this._value = this.max;
    } else {
      this._value = value as number;
    }
    this.onChange();
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  registerOnChange(onChange: any): void {
    this.onChange = () => onChange(this.value);
    this.onChange();
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(value: number): void {
    if (!Number.isNaN(value)) {
      this.value = value;
    }
    this.onChange()
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

  increment() {
    this.value = this.value + this.step;
  }

  decrement() {
    this.value = this.value - this.step;
  }

}
