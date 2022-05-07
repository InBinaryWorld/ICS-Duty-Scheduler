import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalizedDatePipe } from './localized-date/localized-date.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LocalizedDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
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
    CommonModule,
    RouterModule,
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
