import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private prefix: string = "trialWork_";

  get apiToken(): string {
    return localStorage.getItem(this.prefix + "apiToken") || ""
  }
  set apiToken(value: string) {
    if (!value) {
      value = "";
    }
    localStorage.setItem(this.prefix + "apiToken", value);
  }

  get contactlistName(): string {
    return localStorage.getItem(this.prefix + "contactlistName") || "";
  }
  set contactlistName(value: string) {
    if (!value) {
      value = "";
    }
    localStorage.setItem(this.prefix + "contactlistName", value);
  }
}
