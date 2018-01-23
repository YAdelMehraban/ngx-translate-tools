import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor(private translateService: TranslateService) {
    translateService.use('en');
  }

  cats = [
    {
      count: 1,
      category: 'Aegean'
    },
    {
      count: 0,
      category: 'American'
    },
    {
      count: 4,
      category: 'Lykoi'
    }
  ];
}
