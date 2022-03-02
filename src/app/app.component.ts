import { Component } from '@angular/core';

import * as moment from 'moment';
import { map, Observable } from 'rxjs';
import { EchoService } from './services/echo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentTimeFRLocale: string = '';
  public response: Observable<any> = new Observable<any>();

  constructor(private echoService: EchoService) {}

  title = 'angular-webpack-spaexample';

  ngOnInit(): void {
    moment.locale('fr');
    this.currentTimeFRLocale = moment().format('LLL');
    this.response = this.echoService.makeCall();
    console.log(
      'this.response: ',
      this.response.subscribe((x) => map(x))
    );
  }
}
