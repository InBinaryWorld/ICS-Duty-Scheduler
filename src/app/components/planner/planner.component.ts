import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store/root-state.model';
import { first, map, Observable } from 'rxjs';
import { DutyEvent } from '../../core/models/duty-event.model';
import { selectDutyEventsAll } from '../../core/store/events/duty-events.selectors';
import { EventGeneratorService } from '../../core/services/event-generator.service';
import { AddDutyEvent, DeleteAllDutyEvents, DeleteDutyEvent } from '../../core/store/events/duty-events.actions';
import { DutyTimeVariant } from '../../core/models/duty-time-variant.model';
import { selectDutyTimeVariantsAll } from '../../core/store/time-variants/duty-time-variants.selectors';
import { selectDutyTypesAll } from '../../core/store/duty-types/duty-types.selectors';
import { DutyType } from '../../core/models/duty-type.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comparators } from '../../core/base/comparators';
import { IcsGeneratorService } from '../../core/services/ics-generator.service';

enum FormKeys {
  DATE = 'DATE',
  TYPE = 'TYPE',
  TIME = 'TIME'
}

@Component({
  selector: 'ds-dashboard',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent {

  timeVariants: Observable<DutyTimeVariant[]> = this.store.select(selectDutyTimeVariantsAll);
  dutyTypes: Observable<DutyType[]> = this.store.select(selectDutyTypesAll);
  events: Observable<DutyEvent[]> = this.store.select(selectDutyEventsAll).pipe(
    map(eventList => eventList.sort(Comparators.datesComparator(true, event => event.startDate)))
  );

  FormKeys = FormKeys;
  form: FormGroup;

  constructor(protected readonly store: Store<RootState>,
              protected readonly eventGeneratorService: EventGeneratorService,
              protected readonly icsGeneratorService: IcsGeneratorService,
              protected readonly formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      [FormKeys.DATE]: [undefined, Validators.required],
      [FormKeys.TYPE]: [undefined, Validators.required],
      [FormKeys.TIME]: [undefined, Validators.required]
    })
  }

  deleteEvent(event: any): void {
    this.store.dispatch(new DeleteDutyEvent(event.id))
  }

  addEvents(): void {
    const data = this.form.value;
    (data[FormKeys.DATE] as Date[]).forEach(date => {
      const event = this.eventGeneratorService.buildEvent(
        date, data[FormKeys.TIME], data[FormKeys.TYPE]
      );
      this.store.dispatch(new AddDutyEvent(event));
    })
    this.form.reset()
  }

  downloadICS(): void {
    this.events.pipe(first()).subscribe(events => {
      this.icsGeneratorService.generateAndDownload(events)
    })
  }

  clearEvents(): void {
    this.store.dispatch(new DeleteAllDutyEvents());
  }

}
