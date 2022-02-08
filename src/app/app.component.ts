import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lang = 'vi';

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.lang);
  }

  ngOnInit(): void {
    if (!localStorage.getItem('id_generate')) {
      localStorage.setItem('id_generate', uuid.v4());
    }
  }
}
