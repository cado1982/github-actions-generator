import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorKeyValuePairsComponent } from './editor-keyvaluepairs.component';

describe('EditorKeyValuePairsComponent', () => {
  let component: EditorKeyValuePairsComponent;
  let fixture: ComponentFixture<EditorKeyValuePairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorKeyValuePairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorKeyValuePairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
