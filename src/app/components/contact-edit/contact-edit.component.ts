import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../interfaces/Contact";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact | undefined;

  ngOnInit(): void {
  }

}
