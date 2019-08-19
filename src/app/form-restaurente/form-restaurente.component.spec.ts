import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRestaurenteComponent } from './form-restaurente.component';

describe('FormRestaurenteComponent', () => {
  let component: FormRestaurenteComponent;
  let fixture: ComponentFixture<FormRestaurenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRestaurenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRestaurenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
