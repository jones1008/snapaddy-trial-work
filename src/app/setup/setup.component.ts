import { Component, OnInit } from '@angular/core';
import {GlobalMessagesService} from "../../services/global-messages.service";
import {Router} from "@angular/router";
import {ApiDataService} from "../../services/api-data.service";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(
    private globalMessagesService: GlobalMessagesService,
    private router: Router,
    private apiDataService: ApiDataService
  ) {
  }

  contactlistName: string | undefined;
  apiToken: string | undefined;

  ngOnInit(): void {
  }

  saveData() {
    if (this.apiToken && this.contactlistName) {
      this.apiDataService.apiToken = this.apiToken;
      this.apiDataService.contactlistName = this.contactlistName;
      this.router.navigate(['contactlist']);
    } else {
      this.globalMessagesService.error = "please fill out all fields";
    }
  }

}
