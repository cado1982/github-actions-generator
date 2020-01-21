import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobsComponent } from './editor-jobs.component';

describe('EditorJobsComponent', () => {
  let component: EditorJobsComponent;
  let fixture: ComponentFixture<EditorJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
