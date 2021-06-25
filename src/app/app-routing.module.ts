import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactEditView} from "./contact-edit/contact-edit-view.component";
import {ContactlistComponent} from "./contactlist/contactlist.component";
import {ContactNewComponent} from "./contact-new/contact-new.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contactlist',
    pathMatch: 'full'
  },
  {
    path: 'contactlist',
    component: ContactlistComponent,
    children: [
      {
        path: 'contact-edit/:contactId',
        component: ContactEditView
      },
      {
        path: 'new-contact',
        component: ContactNewComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
