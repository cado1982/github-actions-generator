import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEnvironmentComponent } from './editor-environment.component';

describe('EditorEnvironmentComponent', () => {
  let component: EditorEnvironmentComponent;
  let fixture: ComponentFixture<EditorEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
