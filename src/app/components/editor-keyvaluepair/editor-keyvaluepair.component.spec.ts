import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorKeyValuePairComponent } from './editor-keyvaluepair.component';

describe('EditorKeyValuePairComponent', () => {
  let component: EditorKeyValuePairComponent;
  let fixture: ComponentFixture<EditorKeyValuePairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorKeyValuePairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorKeyValuePairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
