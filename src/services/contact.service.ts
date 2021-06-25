import {Injectable} from "@angular/core";
import {ContactList} from "../interfaces/ContactList";
import {Contact} from "../interfaces/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  customerContactList: ContactList | undefined;
  contacts: Contact[] | undefined;
  currentContact: Contact | undefined;
}
