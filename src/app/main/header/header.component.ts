import { Component } from '@angular/core';
import { AppLanguage } from '../../core/models/app-language.model';
import { AppLanguageService } from '../../core/services/app-language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languages: AppLanguage[] = Object.values(AppLanguage);

  constructor(protected readonly appLanguageService: AppLanguageService) {
  }

  get currentLang(): string {
    return this.appLanguageService.currentLang;
  }

  setLang(lang: AppLanguage): void {
    this.appLanguageService.setLanguage(lang)
  }
}
