import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GlobalMessagesService {
  private _success: string | undefined;
  private _error: string | undefined;

  get success(): string | undefined {
    return this._success;
  }

  get error(): string | undefined {
    return this._error;
  }

  set success(value: string | undefined) {
    this._success = value;
  }

  set error(value: string | undefined) {
    this._error = "ERROR: " + value;
  }
}
