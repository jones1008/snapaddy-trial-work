import {Component, OnInit} from '@angular/core';
import {ContactList} from "../../interfaces/ContactList";
import {ContactApiService} from "../../services/contact-api.service";
import {Contact} from "../../interfaces/Contact";
import {ContactService} from "../../services/contact.service";
import {GlobalMessagesService} from "../../services/global-messages.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  constructor(
    private contactApiService: ContactApiService,
    private contactService: ContactService,
    private globalMessagesService: GlobalMessagesService
  ) {
  }

  get customerContactList(): ContactList | undefined {
    return this.contactService.customerContactList;
  }
  set customerContactList(value: ContactList | undefined) {
    this.contactService.customerContactList = value;
  }

  get contacts(): Contact[] | undefined {
    return this.contactService.contacts;
  }
  set contacts(value: Contact[] | undefined) {
    this.contactService.contacts = value;
  }

  ngOnInit(): void {
    // get contact list
    this.contactApiService.getContactLists().subscribe((lists: ContactList[]) => {
      this.customerContactList = lists.find(l => l.name === "Kunden"); // TODO: "Kunden" is hard coded!
      if (this.customerContactList) {
        // get contact list via listId
        this.contactApiService.getContacts(this.customerContactList.contactListId).subscribe((contacts: Contact[]) => {
          this.contacts = contacts;
        }, error => {
          this.globalMessagesService.error = error
        });
      } else {
        this.globalMessagesService.error = "couldn't get customer contact list"
      }
    }, error => {
      this.globalMessagesService.error = error
    });
  }
}
