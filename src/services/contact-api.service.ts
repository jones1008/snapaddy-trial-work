import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {ContactList} from "../interfaces/ContactList";
import {ApiConfig} from "../api/api-config";
import {Contact} from "../interfaces/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {

  constructor(private http: HttpClient) {
  }

  getContactLists(): Observable<ContactList[]> {
    return this.http.get<ContactList[]>(
      ApiConfig.baseUrl + "contactlist",
      ApiConfig.defaultOptions
    );
  }

  getContacts(listId: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      ApiConfig.baseUrl + "contactlist/" + listId + "/contactitems",
      ApiConfig.defaultOptions
    )
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(
      ApiConfig.baseUrl + "contactitem/" + id,
      ApiConfig.defaultOptions
    );
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(
      ApiConfig.baseUrl + "contactitem/" + contact.id,
      contact,
      ApiConfig.defaultOptions
    );
  }

  deleteContact(contact: Contact): Observable<null> {
    return this.http.delete<null>(
      ApiConfig.baseUrl + "contactitem/" + contact.id,
      ApiConfig.defaultOptions
    );
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      ApiConfig.baseUrl + "contactitem",
      contact,
      ApiConfig.defaultOptions
    );
  }
}
