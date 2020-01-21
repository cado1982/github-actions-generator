import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobStepWithComponent } from './editor-job-step-with.component';

describe('EditorJobStepWithComponent', () => {
  let component: EditorJobStepWithComponent;
  let fixture: ComponentFixture<EditorJobStepWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobStepWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobStepWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
