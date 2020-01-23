import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorNumberArrayComponent } from './editor-number-array.component';

describe('EditorNumberArrayComponent', () => {
  let component: EditorNumberArrayComponent;
  let fixture: ComponentFixture<EditorNumberArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorNumberArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorNumberArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
