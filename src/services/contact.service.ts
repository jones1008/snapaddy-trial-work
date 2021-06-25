import {Injectable} from "@angular/core";
import {ContactList} from "../interfaces/ContactList";
import {Contact} from "../interfaces/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  customerContactList: ContactList | undefined;
  contacts: Contact[] | undefined;

  getCurrentContact(id: string): Contact | undefined {
    return this.contacts?.find(c => c.id === id);
  }
}
