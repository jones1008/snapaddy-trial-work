import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ContactApiService} from "../../services/contact-api.service";
import {Contact} from "../../interfaces/Contact";
import {ContactService} from "../../services/contact.service";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact-edit-view.component.html',
  styleUrls: ['./contact-edit-view.component.scss']
})
export class ContactEditView implements OnInit, OnDestroy {

  constructor(
    private actRoute: ActivatedRoute,
    private contactApiService: ContactApiService,
    private contactService: ContactService,
    private router: Router
  ) {
  }

  routeEventSubscription?: Subscription;

  get currentContact(): Contact | undefined {
    return this.contactService.currentContact;
  }
  set currentContact(value: Contact | undefined) {
    this.contactService.currentContact = value;
  }

  get contacts(): Contact[] | undefined {
    return this.contactService.contacts;
  }
  set contacts(value: Contact[] | undefined) {
    this.contactService.contacts = value;
  }

  ngOnInit(): void {
    // subscribe to navigation change to reload contact
    this.routeEventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getContact();
      }
    });
  }

  ngOnDestroy() {
    this.routeEventSubscription?.unsubscribe();
  }

  getContact(): void {
    if (this.contactId) {
      this.contactApiService.getContact(this.contactId).subscribe((contact: Contact) => {
        this.currentContact = contact;
      });
    } else {
      // TODO: error handling
      console.log("ERROR: contactId is null");
    }
  }

  updateContact(contactToUpdate: Contact): void {
    this.contactApiService.updateContact(contactToUpdate).subscribe((contact: Contact) => {
      // TODO: success handling
      console.log("successfully saved Contact")
    });
  }

  deleteContact(contactToDelete: Contact): void {
    this.contactApiService.deleteContact(contactToDelete).subscribe(() => {
      // TODO: success handling
      console.log("successfully deleted contact");
      // remove contact from contacts list too
      this.contacts?.splice(this.contacts?.findIndex(c => c.id === contactToDelete.id), 1);
      this.router.navigate(['/contactlist']);
    });
  }

  get contactId(): string | undefined {
    return this.actRoute.snapshot.params?.id;
  }
}
