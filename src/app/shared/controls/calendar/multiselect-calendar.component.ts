import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'ds-multiselect-calendar',
  templateUrl: './multiselect-calendar.component.html',
  styleUrls: ['./multiselect-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MultiselectCalendar
    }
  ]
})
export class MultiselectCalendar implements ControlValueAccessor {

  calendarState: Set<number> = new Set();
  touched = false;
  disabled = false;

  @ViewChild('calendar')
  calendar!: MatCalendar<Date>

  onChange: () => any = () => {
  };

  onTouched: any = () => {
  };

  isDateSelected = (date: Date): string => {
    return this.calendarState.has(this.extractDateTime(date)) ? 'selected-date' : '';
  };

  selectDate(date: Date | null): void {
    if (date) {
      const time = this.extractDateTime(date);
      this.calendarState.has(time) ? this.calendarState.delete(time) : this.calendarState.add(time);
      this.calendar.updateTodaysDate();
      this.onChange();
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = () => {
      if (this.calendarState.size) {
        onChange([...this.calendarState].map(time => new Date(time)));
      } else {
        onChange(undefined);
      }
    }
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(dates: Date[] | undefined): void {
    this.calendarState = (dates ?? []).reduce((state, date) => {
      state.add(this.extractDateTime(date));
      return state
    }, new Set<number>());
    this.calendar?.updateTodaysDate();
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

  private extractDateTime(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  }

}
