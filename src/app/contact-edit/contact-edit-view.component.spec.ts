import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditView } from './contact-edit-view.component';

describe('ContactComponent', () => {
  let component: ContactEditView;
  let fixture: ComponentFixture<ContactEditView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEditView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
