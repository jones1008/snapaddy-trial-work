import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactApiService} from "../../services/contact-api.service";
import {Contact} from "../../interfaces/Contact";
import {ContactService} from "../../services/contact.service";
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
    return this.contactService.getCurrentContact(this.contactId);
  }

  get contacts(): Contact[] | undefined {
    return this.contactService.contacts;
  }
  set contacts(value: Contact[] | undefined) {
    this.contactService.contacts = value;
  }

  get contactId(): string {
    return this.actRoute.snapshot.params.contactId;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.routeEventSubscription?.unsubscribe();
  }

  updateContact(contactToUpdate: Contact): void {
    this.contactApiService.updateContact(contactToUpdate).subscribe((updatedContact: Contact) => {
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
}
