import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobStepComponent } from './editor-job-step.component';

describe('EditorJobStepComponent', () => {
  let component: EditorJobStepComponent;
  let fixture: ComponentFixture<EditorJobStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
