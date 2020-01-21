import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEnvironmentsComponent } from './editor-environments.component';

describe('EditorEnvironmentsComponent', () => {
  let component: EditorEnvironmentsComponent;
  let fixture: ComponentFixture<EditorEnvironmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorEnvironmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
