import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { AppLanguageService } from '../../core/services/app-language.service';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private appLanguageService: AppLanguageService) {
  }

  transform(value: any, pattern: string = 'mediumDate'): any {
    const datePipe: DatePipe = new DatePipe(this.appLanguageService.currentLang);
    return datePipe.transform(value, pattern);
  }

}