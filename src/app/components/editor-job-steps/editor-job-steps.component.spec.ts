import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobStepsComponent } from './editor-job-steps.component';

describe('EditorJobStepsComponent', () => {
  let component: EditorJobStepsComponent;
  let fixture: ComponentFixture<EditorJobStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
