import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCheckboxComponent } from './quiz-checkbox.component';

describe('QuizCheckboxComponent', () => {
  let component: QuizCheckboxComponent;
  let fixture: ComponentFixture<QuizCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
