import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.scss']
})
export class GlobalMessageComponent implements OnInit {

  constructor() { }

  @Input() message: string | undefined;

  @Input() color: "success" | "error" | undefined;

  ngOnInit(): void {
  }

}
