import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTemplateVariableComponent } from './reference-template-variable.component';

describe('ReferenceTemplateVariableComponent', () => {
  let component: ReferenceTemplateVariableComponent;
  let fixture: ComponentFixture<ReferenceTemplateVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceTemplateVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTemplateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
