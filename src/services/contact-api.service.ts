import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {ContactList} from "../interfaces/ContactList";
import {ApiConfig} from "../api/api-config";
import {Contact} from "../interfaces/Contact";
import {ApiDataService} from "./api-data.service";

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {

  constructor(
    private http: HttpClient,
    private apiDataService: ApiDataService
  ) {
  }

  private config = {
    baseUrl: "https://api.snapaddy.com/grabber/v1/" as string,
    defaultOptions: {
      headers: {
        "x-api-token": this.apiDataService.apiToken,
        "Content-Type": "application/json"
      }
    }
  }


  realConfig = this.config

  getContactLists(): Observable<ContactList[]> {
    return this.http.get<ContactList[]>(
      this.realConfig.baseUrl + "contactlist",
      this.realConfig.defaultOptions
    );
  }

  getContacts(listId: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      this.realConfig.baseUrl + "contactlist/" + listId + "/contactitems",
      this.realConfig.defaultOptions
    )
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(
      this.realConfig.baseUrl + "contactitem/" + contact.id,
      contact,
      this.realConfig.defaultOptions
    );
  }

  deleteContact(contact: Contact): Observable<null> {
    return this.http.delete<null>(
      this.realConfig.baseUrl + "contactitem/" + contact.id,
      this.realConfig.defaultOptions
    );
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      this.realConfig.baseUrl + "contactitem",
      contact,
      this.realConfig.defaultOptions
    );
  }
}
