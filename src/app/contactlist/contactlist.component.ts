import {Component, OnInit} from '@angular/core';
import {ContactList} from "../../interfaces/ContactList";
import {ContactApiService} from "../../services/contact-api.service";
import {Contact} from "../../interfaces/Contact";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  constructor(private contactApiService: ContactApiService, private contactService: ContactService) {
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
    // this.getContactListByName("Kunden");
    // get contact list
    this.contactApiService.getContactLists().subscribe((lists: ContactList[]) => {
      this.customerContactList = lists.find(l => l.name === "Kunden"); // TODO: "Kunden" is hard coded!
      if (this.customerContactList) {
        // get contact list via listId
        this.contactApiService.getContacts(this.customerContactList.contactListId).subscribe((contacts: Contact[]) => {
          this.contacts = contacts;
        }, error => {
          // TODO: error handling
          console.log(error)
        });
      } else {
        // TODO: error handling
        console.log("customerContactList is null");
      }
    }, error => {
      // TODO: error handling
      console.log(error)
    });
  }

  // getContactListByName(name: string) {
  //   this.contactListService.getContactLists().subscribe((lists: ContactList[]) => {
  //     this.customerContactList = lists.find(l => l.name === name);
  //   });
  // }

}
