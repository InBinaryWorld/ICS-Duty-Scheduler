import { Injectable } from '@angular/core';
import { DutyEvent } from '../models/duty-event.model';
import * as ics from 'ics';
import { EventAttributes } from 'ics';

@Injectable({
  providedIn: 'root',
})
export class IcsGeneratorService {

  public generateAndDownload(events: DutyEvent[]): void {
    const attributes = this.convertEvents(events);
    ics.createEvents(attributes, (error, value) => {
      !error && this.downloadAsFile(value);
    })
  }

  private convertEvents(events: DutyEvent[]): EventAttributes[] {
    return events.map(event => ({
      start: [event.startDate.getFullYear(), event.startDate.getMonth(), event.startDate.getDate(), event.startDate.getHours(), event.startDate.getMinutes()],
      duration: event.timeVariant.duration,
      title: event.dutyType.eventName,
      description: undefined,
      location: event.dutyType.place,
      geo: undefined,
      url: undefined,
      status: 'CONFIRMED',
      organizer: undefined,
      alarms: undefined,
      productId: 'Duty Planner WebApp',
      busyStatus: 'BUSY'
    }))
  }

  private downloadAsFile(text: string): void {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'calendar.ics');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}