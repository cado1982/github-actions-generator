import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorStringArrayComponent } from './editor-string-array.component';

describe('EditorStringArrayComponent', () => {
  let component: EditorStringArrayComponent;
  let fixture: ComponentFixture<EditorStringArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorStringArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorStringArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
