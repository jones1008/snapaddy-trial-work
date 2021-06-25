import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactEditView } from './contact-edit/contact-edit-view.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    ContactEditView,
    ContactEditComponent,
    ContactNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
