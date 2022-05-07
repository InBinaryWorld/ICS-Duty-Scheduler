import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';
import { AppLanguage } from '../models/app-language.model';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

@Injectable({
  providedIn: 'root',
})
export class AppLanguageService {
  defaultLang = AppLanguage.PL;

  constructor(protected readonly translateService: TranslateService,
              protected readonly dateAdapter: DateAdapter<any>
  ) {
    this.init();
  }

  public get currentLang(): AppLanguage {
    return this.translateService.currentLang as AppLanguage;
  }

  private init(): void {
    registerLocaleData(localePl, 'pl');
    this.setLanguage(this.defaultLang)
  }

  public setLanguage(lang: AppLanguage): void {
    this.translateService.use(lang);
    this.dateAdapter.setLocale(lang);
  }
}