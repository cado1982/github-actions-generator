import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobComponent } from './editor-job.component';

describe('EditorJobComponent', () => {
  let component: EditorJobComponent;
  let fixture: ComponentFixture<EditorJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
