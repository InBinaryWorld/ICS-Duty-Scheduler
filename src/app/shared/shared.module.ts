import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizedDatePipe } from './localized-date/localized-date.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MultiselectCalendar } from './controls/calendar/multiselect-calendar.component';
import { TimePicker } from './controls/time/time-picker.component';
import { NumberPicker } from './controls/number/number-picker.component';

@NgModule({
  declarations: [
    LocalizedDatePipe,
    MultiselectCalendar,
    NumberPicker,
    TimePicker
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    LocalizedDatePipe,
    MultiselectCalendar,
    NumberPicker,
    TimePicker,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ]
})
export class SharedModule {
}
