import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DutyEvent } from '../../../core/models/duty-event.model';

@Component({
  selector: 'ds-duty-event',
  templateUrl: './duty-event-item.component.html',
  styleUrls: ['./duty-event-item.component.scss']
})
export class DutyEventItemComponent {

  @Input()
  dutyEvent!: DutyEvent;

  @Output()
  deleteAction = new EventEmitter<DutyEvent>();

  deleteEventAction(): void {
    this.deleteAction.emit(this.dutyEvent);
  }

}
