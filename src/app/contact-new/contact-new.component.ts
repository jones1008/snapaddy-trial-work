import { Component, OnInit } from '@angular/core';
import {Contact} from "../../interfaces/Contact";
import {ContactApiService} from "../../services/contact-api.service";
import {ContactList} from "../../interfaces/ContactList";
import {ContactService} from "../../services/contact.service";
import {Router} from "@angular/router";
import {GlobalMessagesService} from "../../services/global-messages.service";

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent implements OnInit {

  constructor(
    private contactApiService: ContactApiService,
    private contactService: ContactService,
    private router: Router,
    private globalMessagesService: GlobalMessagesService
  ) {
  }

  get contacts(): Contact[] | undefined {
    return this.contactService.contacts;
  }
  set contacts(value: Contact[] | undefined) {
    this.contactService.contacts = value;
  }

  contact: Contact = {
    id: "",
    firstName: "",
    lastName: "",
    organization: "",
    position: "",
    contactListId: "pnXPOzNx4wAmrel9" // TODO: this is hard coded
  }

  ngOnInit(): void {
  }

  createContact(): void {
    this.contactApiService.createContact(this.contact).subscribe((newContact: Contact) => {
      this.globalMessagesService.success = "created contact";
      this.contacts?.push(newContact);
      // TODO: make navigation relative to /contactlist
      this.router.navigate(['/contactlist/contact-edit', newContact.id])
    }, error => {
      this.globalMessagesService.error = error;
    });
  }

}
