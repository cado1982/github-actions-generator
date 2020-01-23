import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobServiceComponent } from './editor-job-service.component';

describe('EditorJobServiceComponent', () => {
  let component: EditorJobServiceComponent;
  let fixture: ComponentFixture<EditorJobServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
