import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEcmeComponent } from './add-ecme.component';

describe('AddEcmeComponent', () => {
  let component: AddEcmeComponent;
  let fixture: ComponentFixture<AddEcmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEcmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEcmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
