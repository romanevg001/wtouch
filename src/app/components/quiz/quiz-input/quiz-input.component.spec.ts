import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizInputComponent } from './quiz-input.component';

describe('QuizInputComponent', () => {
  let component: QuizInputComponent;
  let fixture: ComponentFixture<QuizInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
