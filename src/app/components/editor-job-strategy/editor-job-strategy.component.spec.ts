import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorJobStrategyComponent } from './editor-job-strategy.component';

describe('EditorJobStrategyComponent', () => {
  let component: EditorJobStrategyComponent;
  let fixture: ComponentFixture<EditorJobStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorJobStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorJobStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
