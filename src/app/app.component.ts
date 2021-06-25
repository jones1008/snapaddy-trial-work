import {Component} from '@angular/core';
import {GlobalMessagesService} from "../services/global-messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snapaddy-trial-work';

  constructor(private globalMessagesService: GlobalMessagesService) {
  }

  get globalSuccess(): string | undefined {
    return this.globalMessagesService.success;
  }
  get globalError(): string | undefined {
    return this.globalMessagesService.error;
  }
}
