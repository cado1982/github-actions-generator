import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobContainerComponent } from './editor-job-container.component';

describe('EditorJobContainerComponent', () => {
  let component: EditorJobContainerComponent;
  let fixture: ComponentFixture<EditorJobContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
